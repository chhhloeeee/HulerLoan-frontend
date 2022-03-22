import Button from "../../components/button";
import styles from '../../styles/form.module.css'

export default function ListReturn() {
    return (
      <div className={styles.app}>
      <h1 className={styles.title}>Returns</h1>
      <Button text="Cancel" href="/home" />
    </div>
    )
  }