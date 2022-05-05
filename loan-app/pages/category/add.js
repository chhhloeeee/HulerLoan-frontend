import FormElement from "../../components/form";
import Button from "../../components/button";
import styles from "../../styles/form.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

export default function AddCategory() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
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
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/v1/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
    if (!response.ok) {
      alert("Something went wrong");
      return;
    }
    alert("Category added");
    router.push("/category/list");
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Add Category</h1>
      <div className={styles.form}>
        <form action="" method="post" onSubmit={handleSubmit(postCategory)}>
          <FormElement
            text="Category"
            type="text"
            name="name"
            value={category.name}
            onChange={(e) => handleChange(e)}
            className={styles.inputField}
            {...register("name", {
              required: "Name is required",
            })}
          ></FormElement>
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <p className={styles.error}>{message}</p>}
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
