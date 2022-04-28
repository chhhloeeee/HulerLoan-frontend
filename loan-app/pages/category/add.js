import FormElement from "../../components/form";
import Button from "../../components/button";
import styles from "../../styles/form.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AddCategory() {
  const router = useRouter();
  const [category, setCategory] = useState({
    categoryID: "",
    name: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setCategory({ ...category, [event.target.name]: value });
  };

  const postCategory = async (e) => {
    console.log(category);
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/v1/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
    if (!response.ok) {
      console.log(response);
      throw new Error("Internal Server Error");
    }
    router.push("/category/list");
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Add Category</h1>
      <div className={styles.form}>
        <form action="" method="post">
          <FormElement
            text="Category"
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            className={styles.inputField}
            required
          ></FormElement>
          <label>
            <span> </span>
            <input type="submit" value="Submit" onClick={postCategory} />
          </label>
        </form>
      </div>
      <Button text="Cancel" href="/home" />
    </div>
  );
}
