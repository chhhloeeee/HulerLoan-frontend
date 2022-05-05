import Button from "../../components/button";
import FormElement from "../../components/form";
import styles from "../../styles/form.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AddUser() {
  const router = useRouter();
  const [user, setUser] = useState({
    userID: "",
    name: null,
    password: null,
    admin: false,
    email: null,
    username: null,
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
        <form action="" method="post">
          <FormElement
            required
            text="Name"
            type="text"
            name="name"
            className={styles.inputField}
            value={user.name}
            onChange={(e) => handleChange(e)}
          />
          <FormElement
            required
            text="Username"
            type="text"
            name="username"
            className={styles.inputField}
            value={user.username}
            onChange={(e) => handleChange(e)}
          />

          <FormElement
            required
            text="Email"
            type="text"
            name="email"
            className={styles.inputField}
            value={user.email}
            onChange={(e) => handleChange(e)}
          />

          <FormElement
            text="Admin?"
            type="checkbox"
            name="admin"
            className={styles.checkbox}
            value={user.admin}
            onChange={(e) => handleChange(e)}
          ></FormElement>
          <FormElement
            required
            text="Password"
            type="password"
            name="password"
            className={styles.inputField}
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
