import Button from "../../components/button";
import FormElement from "../../components/form";
import styles from "../../styles/form.module.css";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { APILoader } from "../../components/api";
import "react-datepicker/dist/react-datepicker.css";

export default function AddReturnLoader() {
  // var start = new Date();
  // start.setDate(start.getDate() - 1);
  // const [startDate, setStartDate] = useState(start);
  var { loanID } = useParams();
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Loan</h1>
      <APILoader
        url={"http://localhost:8080/api/v1/loan/" + loanID}
        Component={AddReturn}
      />
      <Button text="Cancel" href="/loan/list" />
    </div>
  );
}

function AddReturn() {
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
            readOnly
            value={loan.loanID}
          ></FormElement>
          <label for="item">
            <span>
              Item <span class={styles.required}>*</span>
            </span>
            <select name="item" className={styles.selectField}>
              <option value="General Question">General</option>
              <option value="Advertise">Advertisement</option>
              <option value="Partnership">Partnership</option>
            </select>
          </label>
          <label for="return">
            <span>
              Return Date<span className={styles.required}>*</span>
            </span>
          </label>
          <DatePicker
            id={styles.date}
            selected={startDate}
            name="return"
            className={styles.inputField}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
          />
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
