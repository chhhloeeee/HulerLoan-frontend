import Button from "../../components/button";
import FormElement from "../../components/form";
import styles from "../../styles/form.module.css";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function AddReturn() {
  var start = new Date();
  start.setDate(start.getDate() - 1);
  const [startDate, setStartDate] = useState(start);
  const [loading, setLoading] = useState(true);
  const [userValue, setUserValue] = useState();
  const [user, setUser] = useState([{ label: "Loading...", value: "" }]);

  useEffect(() => {
    let unmounted = false;
    async function getUsers() {
      const response = await fetch("http://localhost:8080/api/v1/loan");
      const body = await response.json();
      console.log(body);
      console.log(response);
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
      <h1 className={styles.title}>Create Return</h1>
      <div className={styles.form}>
        <form action="" method="post">
          <label for="id">
            <span>
              ID <span className={styles.required}>*</span>
            </span>
            <select
              disabled={loading}
              id="users"
              className={styles.selectField}
              value={userValue}
              onChange={(e) => setUserValue(e.currentTarget.userValue)}
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
