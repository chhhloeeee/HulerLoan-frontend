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
  const [category, setCategory] = useState([
    { label: "Loading...", value: "" },
  ]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSpecs({ ...specs, [event.target.name]: value });
  };

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
        <form action="" method="post">
          <FormElement
            required
            text="Description"
            type="text"
            name="description"
            onChange={(e) => handleChange(e)}
            className={styles.inputField}
          ></FormElement>
          <label>
            <span> </span>
            <input type="submit" value="Submit" onSubmit={postSpecs} />
          </label>
        </form>
      </div>
      <Button text="Cancel" href="/home" />
    </div>
  );
}
