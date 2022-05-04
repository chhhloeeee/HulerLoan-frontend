import Button from "../../components/button";
import FormElement from "../../components/form";
import styles from "../../styles/form.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

export default function AddUser() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const router = useRouter();
  const [user, setUser] = useState({
    userID: "",
    name: "",
    password: "",
    admin: false,
    email: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setUser({ ...user, [event.target.name]: value });
  };

  const postUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log(response);
    if (!response.ok) {
      alert("Something went wrong");
      return;
    }
    alert("User added");
    router.push("/user/list");
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Create User</h1>
      <div className={styles.form}>
        <form action="" method="post" onSubmit={handleSubmit(postUser)}>
          <FormElement
            for="name"
            text="Name"
            type="text"
            name="name"
            className={styles.inputField}
            value={user.name}
            onChange={(e) => handleChange(e)}
            {...register("name", {
              required: "Name is required",
            })}
          ></FormElement>
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <p className={styles.error}>{message}</p>}
          />
          <FormElement
            for="email"
            text="Email"
            type="text"
            name="email"
            className={styles.inputField}
            value={user.email}
            onChange={(e) => handleChange(e)}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Please enter a valid email",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <p className={styles.error}>{message}</p>}
          />
          <FormElement
            for="admin"
            text="Admin?"
            type="checkbox"
            name="admin"
            className={styles.checkbox}
            value={user.admin}
            onChange={(e) => handleChange(e)}
          ></FormElement>
          <FormElement
            for="password"
            text="Password"
            type="password"
            name="password"
            className={styles.inputField}
            value={user.password}
            onChange={(e) => handleChange(e)}
            {...register("password", {
              required: "Password is required",
            })}
          ></FormElement>
          <ErrorMessage
            errors={errors}
            name="password"
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
