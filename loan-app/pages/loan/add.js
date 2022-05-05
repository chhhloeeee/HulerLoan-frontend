import Button from "../../components/button";
import styles from "../../styles/form.module.css";
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
    dayselapsed: "0",
    issuedate: startDate,
    returndate: endDate,
  });

  useEffect(() => {
    let unmounted = false;
    async function getEquipment() {
      const response = await fetch("http://localhost:8080/api/v1/equipment");
      const body = await response.json();
      console.log(body[0].availability);
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
      return;
    }
    alert("Loan created");
    router.push("/loan/list");
  };

  useEffect(() => {
    let unmounted = false;
    async function getUsers() {
      const response = await fetch("http://localhost:8080/api/v1/users");
      const body = await response.json();
      console.log(body);
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
              required
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
              required
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
            required
            text="From"
            type="date"
            name="issuedate"
            className={styles.inputField}
            required
            value={loan.issuedate}
            onChange={(e) => handleChange(e)}
          ></FormElement>

          <FormElement
            required
            text="To"
            type="date"
            name="returndate"
            className={styles.inputField}
            required
            value={loan.returndate}
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
