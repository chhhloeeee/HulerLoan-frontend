import React from "react";
import Button from "../../components/button";
import styles from "../../styles/form.module.css";

export default function AddEquipment() {
  const [loading, setLoading] = React.useState(true);
  const [catValue, setCatValue] = React.useState();
  const [categories, setCategory] = React.useState([
    { label: "Loading...", value: "" },
  ]);

  React.useEffect(() => {
    let unmounted = false;
    async function getCategories() {
      const response = await fetch("http://localhost:8080/api/v1/category");
      const body = await response.json();
      console.log(body)
      console.log(response)
      if (!unmounted) {
        setCategory(
          body.map(({ name, categoryID }) => ({ label: name, value: categoryID }))
        );
        setLoading(false);
      }
    }
    getCategories();
    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Add Equipment</h1>
      <div className={styles.form}>
        <form action="" method="post">
          <label>
            <span>
              Category <span className={styles.required}>*</span>
            </span>
            <select
              disabled={loading}
              id="category"
              className={styles.selectField}
              value={catValue}
              onChange={(e) => setCatValue(e.currentTarget.catValue)}
            >
              {categories.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>
              Specs <span className={styles.required}>*</span>
            </span>
            <select
              id="specs"
              onChange="show(this)"
              name="specs"
              className={styles.selectField}
            >
              <option value=""></option>
            </select>
          </label>
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
