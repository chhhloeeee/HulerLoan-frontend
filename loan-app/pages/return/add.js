import Button from "../../components/button";
import FormElement from "../../components/form";
import styles from "../../styles/form.module.css";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function AddReturn() {
  var start = new Date();
  start.setDate(start.getDate() - 1);
  const [startDate, setStartDate] = useState(start);
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Create Return</h1>
      <div className={styles.form}>
        <form action="" method="post">
          <FormElement
            for="id"
            text="User ID"
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
          <DatePicker id={styles.date}
            selected={startDate}
            name="return"
            className={styles.inputField}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
          />
          <FormElement
            for="days"
            text="Days Elapsed"
            type="text"
            name="days"
            className={styles.inputField}
            required
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
