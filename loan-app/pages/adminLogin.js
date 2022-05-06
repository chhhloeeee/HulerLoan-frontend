import Link from "next/link";
import { useState } from "react";
import style from "../styles/login.module.css";
import { useRouter } from "next/router";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

export default function AdminLogin() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: null,
    password: null,
  });

  function MyLink(props) {
    let { href, children, ...rest } = props;
    return (
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    );
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setUser({ ...user, [event.target.name]: value });
  };

  const Login = async (e) => {
    console.log(user, "user");
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/v1/auth/login", {
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
    alert("Success");
    router.push("/home");
  };
  return (
    <div className={style.appHeader}>
      <h2 className={style.title}>HulerLoan Login</h2>
      <p className={style.subtitle}>Admin</p>
      <form align="center">
        <input
          className={style.uid}
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => handleChange(e)}
          required
        ></input>

        <br></br>
        <input
          className={style.pwd}
          type="text"
          name="password"
          value={user.password}
          onChange={(e) => handleChange(e)}
        ></input>

        <br></br>
        <button className={style.logbttn} type="submit" onClick={Login}>
          Submit
        </button>
      </form>
      <MyLink className={style.accountBttn} href="/">
        Switch account type?
      </MyLink>
      <MyLink className={style.registerBttn} href="/register">
        Register account
      </MyLink>
    </div>
  );
}
