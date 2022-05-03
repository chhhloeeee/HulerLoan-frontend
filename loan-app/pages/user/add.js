import Button from "../../components/button";
import FormElement from "../../components/form";
import styles from "../../styles/form.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AddUser() {
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
    }
    alert("User added");
    router.push("/user/list");
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Create User</h1>
      <div className={styles.form}>
        <form action="" method="post">
          <FormElement
            for="name"
            text="Name"
            type="text"
            name="name"
            className={styles.inputField}
            required
            value={user.name}
            onChange={(e) => handleChange(e)}
          ></FormElement>
          <FormElement
            for="email"
            text="Email"
            type="text"
            name="email"
            className={styles.inputField}
            required
            value={user.email}
            onChange={(e) => handleChange(e)}
          ></FormElement>
          <FormElement
            for="admin"
            text="Admin?"
            type="checkbox"
            name="admin"
            className={styles.checkbox}
            required
            value={user.admin}
            onChange={(e) => handleChange(e)}
          ></FormElement>
          <FormElement
            for="password"
            text="Password"
            type="password"
            name="password"
            className={styles.inputField}
            required
            value={user.password}
            onChange={(e) => handleChange(e)}
          ></FormElement>
          <label>
            <span> </span>
            <input type="submit" value="Submit" onClick={postUser} />
          </label>
        </form>
      </div>
      <Button text="Cancel" href="/home" />
    </div>
  );
}
