import React from "react";
import Button from "../../components/button";
import styles from "../../styles/form.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

export default function AddEquipment() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [categories, setCategory] = useState([
    { label: "Loading...", value: "" },
  ]);
  const [equipment, setEquipment] = useState({
    equipmentID: "",
    categoryID: "",
    specsID: "",
    availability: "",
  });
  const [specs, setSpecs] = useState([{ label: "Loading...", value: "" }]);

  const handleChange = (event) => {
    console.log(value, "value");
    const value = event.target.value;
    setEquipment({ ...equipment, [event.target.name]: value });
  };

  useEffect(() => {
    let unmounted = false;
    async function getCategories() {
      const response = await fetch("http://localhost:8080/api/v1/category");
      const body = await response.json();
      console.log(body);
      console.log(response);
      if (!unmounted) {
        setCategory(
          body.map(({ name, categoryID }) => ({
            label: name,
            value: categoryID,
          }))
        );
        setLoading(false);
      }
    }
    getCategories();
    return () => {
      unmounted = true;
    };
  }, []);

  useEffect(() => {
    let unmounted = false;
    async function getSpecs() {
      const response = await fetch("http://localhost:8080/api/v1/specs");
      const body = await response.json();
      if (!unmounted) {
        setSpecs(
          body.map(({ description, specsID }) => ({
            label: description,
            value: specsID,
          }))
        );
        setLoading(false);
      }
    }
    getSpecs();
    return () => {
      unmounted = true;
    };
  }, []);

  const postEquipment = async (e) => {
    e.preventDefault();
    console.log(equipment, "equip");
    const response = await fetch("http://localhost:8080/api/v1/equipment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(equipment),
    });
    console.log(response);
    if (!response.ok) {
      alert("Something went wrong");
      return;
    }
    alert("Equipment added");
    router.push("/equipment/list");
  };
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Add Equipment</h1>
      <div className={styles.form}>
        <form action="" method="post" onClick={handleSubmit(postEquipment)}>
          <label>
            <span>
              Category <span className={styles.required}>*</span>
            </span>
            <select
              disabled={loading}
              name="categoryID"
              className={styles.selectField}
              value={equipment.categoryID}
              onChange={(e) => handleChange(e)}
              {...register("categroyID", {
                required: "Category is required",
              })}
            >
              <option hidden selected>
                Select...
              </option>
              {categories.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <ErrorMessage
            errors={errors}
            name="categoryID"
            render={({ message }) => <p className={styles.error}>{message}</p>}
          />
          <label>
            <span>
              Specs <span className={styles.required}>*</span>
            </span>
            <select
              disabled={loading}
              name="specsID"
              className={styles.selectField}
              value={equipment.specsID}
              onChange={(e) => handleChange(e)}
              {...register("specsID", {
                required: "Specification is required",
              })}
            >
              <option hidden selected>
                Select...
              </option>
              {specs.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <ErrorMessage
            errors={errors}
            name="specsID"
            render={({ message }) => <p className={styles.error}>{message}</p>}
          />
          <label>
            <span>
              Availability<span className={styles.required}>*</span>
            </span>
            <select
              disabled={loading}
              name="availability"
              className={styles.selectField}
              value={equipment.availability}
              onChange={(e) => handleChange(e)}
              {...register("availability", {
                required: "Availability is required",
              })}
            >
              <option hidden selected>
                Select...
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </label>
          <ErrorMessage
            errors={errors}
            name="availability"
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
