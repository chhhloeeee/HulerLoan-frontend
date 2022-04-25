import Button from "../../components/button";
import FormElement from "../../components/form";
import styles from "../../styles/form.module.css";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function AddLoan() {
  var end = new Date();
  var start = new Date();
  start.setDate(start.getDate());
  end.setDate(end.getDate() + 1)
  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(end);
  const [loading, setLoading] = useState(true);
  const [equipValue, setEquipValue] = useState();
  const [equipment, setEquipment] = useState([
    { label: "Loading...", value: "" },
  ]);

  
  useEffect(() => {
    let unmounted = false;
    async function getEquipment() {
      const response = await fetch("http://localhost:8080/api/v1/equipment");
      const body = await response.json();
      console.log(body)
      console.log(response)
      if (!unmounted) {
        setEquipment(
          body.map(({ categoryName, specsDescription, equipmentID }) => ({ label: categoryName + " " +specsDescription, value: equipmentID }))
        );
        setLoading(false);
      }
    }
    getEquipment();
    return () => {
      unmounted = true;
    };
  }, []);
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
            name="name"
            className={styles.inputField}
            required
            readOnly={true}
          ></FormElement>
          <label for="item">
            <span>
              Item <span className={styles.required}>*</span>
            </span>
            <select
              disabled={loading}
              id="loan"
              className={styles.selectField}
              value={equipValue}
              onChange={(e) => setEquipValue(e.currentTarget.equipValue)}
            >
              {equipment.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label for="from">
            <span>
              From<span className={styles.required}>*</span>
            </span>
          </label>
          <DatePicker id={styles.date}
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
          <DatePicker id={styles.date}
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
