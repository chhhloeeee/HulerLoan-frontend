import Button from "../../components/button";
import styles from '../../styles/form.module.css'
import Table from '../../components/table'

export default function ListCategory() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Categories</h1>
      <Button text="Cancel" href="/home" />
    </div>
  );
}
