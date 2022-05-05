import FormElement from "../../components/form";
import Button from "../../components/button";
import styles from "../../styles/form.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

export default function AddCategory() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [specs, setSpecs] = useState({
    specsID: "",
    categoryID: "",
    description: "",
  });
  const [category, setCategory] = useState([
    { label: "Loading...", value: "" },
  ]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSpecs({ ...specs, [event.target.name]: value });
  };

  useEffect(() => {
    let unmounted = false;
    async function getCategory() {
      const response = await fetch("http://localhost:8080/api/v1/category");
      const body = await response.json();
      console.log(body);
      console.log(response);
      if (!unmounted) {
        setCategory(
          body.map(({ categoryID, name }) => ({
            label: categoryID + ": " + name,
            value: categoryID,
          }))
        );
        setLoading(false);
      }
    }
    getCategory();
    return () => {
      unmounted = true;
    };
  }, []);
  const postSpecs = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/v1/specs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(specs),
    });
    console.log(response);
    if (!response.ok) {
      alert("Something went wrong");
      return;
    }
    alert("Specification added");
    router.push("/specs/list");
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Add Specs</h1>
      <div className={styles.form}>
        <form action="" method="post" onSubmit={handleSubmit(postSpecs)}>
          <label>
            <span>
              Category <span className={styles.required}>*</span>
            </span>
            <select
              required
              disabled={loading}
              id="category"
              name="categoryID"
              className={styles.selectField}
              value={category.categoryID}
              onChange={(e) => handleChange(e)}
            >
              <option hidden selected>
                Select...
              </option>
              {category.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <FormElement
            text="Description"
            type="text"
            name="description"
            onChange={(e) => handleChange(e)}
            className={styles.inputField}
            {...register("description", {
              required: "Description is required",
            })}
          ></FormElement>
          <ErrorMessage
            errors={errors}
            name="description"
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
