import Button from "../../components/button";
import FormElement from "../../components/form";
import styles from "../../styles/form.module.css";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function AddLoan() {
  var start = new Date();
  start.setDate(start.getDate() - 1);
  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>New Loan</h1>
      <div className={styles.form}>
        <form action="" method="post">
          <FormElement
            for="id"
            text="ID"
            type="text"
            name="id"
            className={styles.inputField}
            required
          ></FormElement>
          <FormElement
            for="name"
            text="Name"
            type="text"
            name="name"
            className={styles.inputField}
            required
          ></FormElement>
          <label for="item">
            <span>
              Item <span className={styles.required}>*</span>
            </span>
            <select name="item" className={styles.selectField}>
              <option value="General Question">General</option>
              <option value="Advertise">Advertisement</option>
              <option value="Partnership">Partnership</option>
            </select>
          </label>
          <label for="from">
            <span>
              From<span className={styles.required}>*</span>
            </span>
          </label>
          <DatePicker
            selected={startDate}
            name="from"
            className={styles.inputField}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
          />
          <label for="to">
            <span>
              To<span className={styles.required}>*</span>
            </span>
          </label>
          <DatePicker
            selected={endDate}
            name="from"
            className={styles.inputField}
            onChange={(date) => setEndDate(date)}
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
