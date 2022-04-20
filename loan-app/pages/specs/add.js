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
            for="description"
            text="Description"
            type="text"
            name="description"
            className={styles.inputField}
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
