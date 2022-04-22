import Button from "../../components/button";
import styles from "../../styles/form.module.css";
import {useState} from 'react';
import { APILoader } from "../../components/api";

export default function AddEquipment() {
  if (typeof window !== "undefined") {
    window.onload = populateCat();
  }
  

  const postNewEquipment = () => {};

  function populateCat() {
    const [category, setCategory] = useState("");
    fetch('http://localhost:8080/api/v1/category', {
      method: "GET",
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      setCategory(response)
    })
    .catch((err) => setError(err))
    
  
    var el = document.getElementById("category");
    for (var i = 0; i < category.length; i++) {
      el.innerHTML =
        el.innerHTML +
        '<option value="' +
        category[i].categoryID +
        '">' +
        category[i].name +
        "</option>";
    }
  }
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Add Equipment</h1>
      <div className={styles.form}>
        <form action="" method="post">
          <label for="category">
            <span>
              Category <span className={styles.required}>*</span>
            </span>
            <select
              id="category"
              onChange="show(this)"
              name="category"
              className={styles.selectField}
            >
              <option value=""></option>
            </select>
          </label>
          <label for="specs">
            <span>
              Specs <span class={styles.required}>*</span>
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
            <input type="submit" value="Submit" onClick={postNewEquipment} />
          </label>
        </form>
      </div>
      <Button text="Cancel" href="/home" />
    </div>
  );
}
