import Link from "next/link";
import { useState, useEffect } from "react";
import style from "../styles/login.module.css";
import { useRouter } from "next/router";

export default function AdminLogin() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: null,
    password: null,
    admin: true,
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
    e.preventDefault();
    const username = user.username;
    const password = user.password;
    const admin = user.admin;

    if (username === "chloe1" && password === "cat" && admin === true) {
      alert("You have successfully logged in.");
      router.push("/home");
    } else {
      // Otherwise, make the login error message show (change its oppacity)
      alert("Incorrect username or password");
      return;
    }
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
          placeholder="Password"
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
