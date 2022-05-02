import Button from "../../components/button";
import styles from "../../styles/form.module.css";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";

import FormElement from "../../components/form";

import { useRouter } from "next/router";

export default function AddLoan() {
  var startDate = new Date().toLocaleDateString();
  var end = new Date();
  end.setDate(end.getDate() + 1);
  var endDate = end.toLocaleDateString();
  const [loading, setLoading] = useState(true);
  const [equipment, setEquipment] = useState([
    { label: "Loading...", value: "" },
  ]);
  const [user, setUser] = useState([{ label: "Loading...", value: "" }]);

  const router = useRouter();
  const [loan, setLoan] = useState({
    loanID: "",
    userID: "",
    equipmentID: "",
    active: true,
    days_elapsed: "",
    issue_date: "",
    return_date: "",
  });

  console.log(loan.issue_date, "issue date");
  console.log(loan.return_date, "return date");
  useEffect(() => {
    let unmounted = false;
    async function getEquipment() {
      const response = await fetch("http://localhost:8080/api/v1/equipment");
      const body = await response.json();
      if (!unmounted) {
        setEquipment(
          body.map(({ categoryName, specsDescription, equipmentID }) => ({
            label: categoryName + " " + specsDescription,
            value: equipmentID,
          }))
        );
        setLoading(false);
      }
    }
    getEquipment();
    return () => {
      unmounted = true;
    };
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setLoan({ ...loan, [event.target.name]: value });
  };

  const postLoan = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/v1/loan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loan),
    });
    console.log(response);
    if (!response.ok) {
      alert("Something went wrong");
    }
    router.push("/loan/list");
  };

  useEffect(() => {
    let unmounted = false;
    async function getUsers() {
      const response = await fetch("http://localhost:8080/api/v1/users");
      const body = await response.json();
      if (!unmounted) {
        setUser(
          body.map(({ userID, name }) => ({
            label: userID + ": " + name,
            value: userID,
          }))
        );
        setLoading(false);
      }
    }
    getUsers();
    return () => {
      unmounted = true;
    };
  }, []);

  function validatedate(inputText) {
    var dateformat =
      /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    // Match the date format through regular expression
    if (inputText.value.match(dateformat)) {
      document.form.issue_date.focus();
      document.form.return_date.focus();
      //Test which seperator is used '/' or '-'
      var opera1 = inputText.value.split("/");
      var opera2 = inputText.value.split("-");
      var lopera1 = opera1.length;
      var lopera2 = opera2.length;
      // Extract the string into month, date and year
      if (lopera1 > 1) {
        var pdate = inputText.value.split("/");
      } else if (lopera2 > 1) {
        var pdate = inputText.value.split("-");
      }
      var dd = parseInt(pdate[0]);
      var mm = parseInt(pdate[1]);
      var yy = parseInt(pdate[2]);
      // Create list of days of a month [assume there is no leap year by default]
      var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (mm == 1 || mm > 2) {
        if (dd > ListofDays[mm - 1]) {
          alert("Invalid date format!");
          return false;
        }
      }
      if (mm == 2) {
        var lyear = false;
        if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
          lyear = true;
        }
        if (lyear == false && dd >= 29) {
          alert("Invalid date format!");
          return false;
        }
        if (lyear == true && dd > 29) {
          alert("Invalid date format!");
          return false;
        }
      }
    } else {
      alert("Invalid date format!");
      document.form.issue_date.focus();
      document.form.return_date.focus();
      return false;
    }
  }
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>New Loan</h1>
      <div className={styles.form}>
        <form action="" method="post" name="form">
          <label>
            <span>
              ID <span className={styles.required}>*</span>
            </span>
            <select
              disabled={loading}
              name="userID"
              className={styles.selectField}
              value={loan.userID}
              onChange={(e) => handleChange(e)}
            >
              <option hidden selected>
                Select...
              </option>
              {user.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>
              Item <span className={styles.required}>*</span>
            </span>
            <select
              disabled={loading}
              name="equipmentID"
              className={styles.selectField}
              value={loan.equipmentID}
              onChange={(e) => handleChange(e)}
            >
              <option hidden selected>
                Select...
              </option>
              {equipment.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <FormElement
            text="From"
            type="text"
            name="issue_date"
            className={styles.inputField}
            required
            value={loan.issue_date}
            placeholder={startDate}
            onChange={(e) => handleChange(e)}
          ></FormElement>
          <FormElement
            text="To"
            type="text"
            name="return_date"
            className={styles.inputField}
            required
            value={loan.return_date}
            placeholder={endDate}
            onChange={(e) => handleChange(e)}
          ></FormElement>
          <label>
            <span> </span>
            <input type="submit" value="Submit" onClick={postLoan} />
          </label>
        </form>
      </div>
      <Button text="Cancel" href="/home" />
    </div>
  );
}
