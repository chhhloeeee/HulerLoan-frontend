import FormElement from "../../components/form";
import Button from "../../components/button";
import styles from "../../styles/form.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function AddCategory() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [specs, setSpecs] = useState({
    specsID: "",
    description: "",
  });
  const [catValue, setCatValue] = useState();
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
      throw new Error("Internal Server Error");
    }
    router.push("/specs/list");
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Add Specs</h1>
      <div className={styles.form}>
        <form action="" method="post">
          <label for="category">
            <span>
              Category <span className={styles.required}>*</span>
            </span>
            <select
              disabled={loading}
              id="category"
              name="category"
              className={styles.selectField}
              value={catValue}
              onChange={(e) => setCatValue(e.currentTarget.catValue)}
            >
              {category.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <FormElement
            for="description"
            text="Description"
            type="text"
            name="description"
            onChange={(e) => handleChange(e)}
            className={styles.inputField}
            required
          ></FormElement>
          <label>
            <span> </span>
            <input type="submit" value="Submit" onClick={postSpecs} />
          </label>
        </form>
      </div>
      <Button text="Cancel" href="/home" />
    </div>
  );
}
