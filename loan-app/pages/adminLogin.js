import Link from "next/link";
import { useState } from "react";
import style from "../styles/login.module.css";
import { useRouter } from "next/router";

export default function AdminLogin() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    password: "",
    loggedIn: false,
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
    const response = await fetch("http://localhost:8080/api/v1/users/login", {
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
      <input
        className={style.uid}
        type="text"
        placeholder="Username"
        name="name"
        value={user.name}
        onChange={(e) => handleChange(e)}
      ></input>
      <input
        className={style.pwd}
        type="password"
        placeholder="Password"
        name="password"
        value={user.password}
        onChange={(e) => handleChange(e)}
      ></input>
      <label>
        <span> </span>
        <input type="submit" value="Submit" onClick={Login} />
      </label>
      <MyLink className={style.accountBttn} href="/">
        Switch account type?
      </MyLink>
      <MyLink className={style.registerBttn} href="/register">
        Register account
      </MyLink>
    </div>
  );
}
