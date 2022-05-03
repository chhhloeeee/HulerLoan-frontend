import Button from "../../components/button";
import FormElement from "../../components/form";
import styles from "../../styles/form.module.css";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function AddReturn({ loanList }) {
  console.log(loanList);

  const [loan, setLoan] = useState({
    loanID: "",
    userID: "",
    equipmentID: "",
    active: true,
    dayselapsed: "0",
    issuedate: "",
    returndate: "",
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:8080/api/v1/loan" + loanID,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       const loan = await response.json();
  //       setUser(loan);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   if (loanID) {
  //     fetchData();
  //   }
  // }, [loanID]);

  const handleChange = (event) => {
    const value = event.target.value;
    setLoan({ ...loan, [event.target.name]: value });
  };

  const PostReturn = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/v1/loan" + userId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loan),
    });
    if (!response.ok) {
      alert("Something went wrong");
    }
    alert("Loan returned");
    router.push("/loan/list");
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Create Return</h1>
      <div className={styles.form}>
        <form action="" method="post">
          <FormElement
            text="Loan ID"
            type="text"
            name="loanID"
            className={styles.inputField}
            value={loan.loanID}
          ></FormElement>
          <FormElement
            text="Item"
            type="text"
            name="equipmentID"
            className={styles.inputField}
            readOnly
            value={loan.equipmentID}
          ></FormElement>
          <FormElement
            text="Return Date"
            type="date"
            name="returndate"
            className={styles.inputField}
            readOnly
            value={loan.returndate}
          ></FormElement>
          <label>
            <span> </span>
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
      <Button text="Cancel" href="/home" />
    </div>
  );
}
