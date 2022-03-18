import Button from "../../components/button";
import styles from '../../styles/form.module.css'

export default function AddEquipment() {
    return (
    <div className={styles.app}>
          <h1 className={styles.title}>
              Add Equipment
            </h1>
            <div className={styles.form}>
              <form action="" method="post">
              <label for="category"><span>Category <span className={styles.required}>*</span></span><select name="category" className={styles.selectField}>
                <option value="General Question">General</option>
                <option value="Advertise">Advertisement</option>
                <option value="Partnership">Partnership</option>
              </select></label>
              <label for="specs"><span>Specs <span class={styles.required}>*</span></span><select name="specs" className={styles.selectField}>
                <option value="General Question">General</option>
                <option value="Advertise">Advertisement</option>
                <option value="Partnership">Partnership</option>
              </select></label>
              <label><span> </span><input type="submit" value="Submit" /></label>
              </form>
            </div> 
            <Button
        text="Cancel"
        href="/home"
      />
        </div>
    )
  }