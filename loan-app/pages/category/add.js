import FormElement from "../../components/form";
import Button from "../../components/button";
import styles from '../../styles/form.module.css'

export default function AddCategory() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Add Category</h1>
      <div className={styles.form}>
        <form action="" method="post">
          <FormElement
            for="category"
            text="Category"
            type="text"
            name="category"
            className={styles.inputField}
            required
          ></FormElement>
          <FormElement
            for="active"
            text="Active?"
            type="checkbox"
            name="checkbox"
            className={styles.checkbox}
            required
          ></FormElement>
          <label>
            <span> </span>
            <input type="submit" value="Submit" />
          </label>
        </form>
      </div>
      <Button
        text="Cancel"
        href="/home"
      />
    </div>
  );
}
