import Button from "../../components/button";
import FormElement from "../../components/form";
import styles from "../../styles/form.module.css";

export default function AddUser() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Create User</h1>
      <div className={styles.form}>
        <form action="" method="post">
          <FormElement
            for="name"
            text="Name"
            type="text"
            name="name"
            className={styles.inputField}
            required
          ></FormElement>
          <FormElement
            for="email"
            text="Email"
            type="text"
            name="email"
            className={styles.inputField}
            required
          ></FormElement>
          <FormElement
            for="admin"
            text="Admin?"
            type="checkbox"
            name="checkbox"
            className={styles.checkbox}
            required
          ></FormElement>
          <FormElement
            for="password"
            text="Password"
            type="password"
            name="password"
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
