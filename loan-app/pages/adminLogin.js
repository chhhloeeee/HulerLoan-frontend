import Link from "next/link";
import { useState } from "react";
import style from "../styles/login.module.css";
import { useRouter } from "next/router";
import { APILoader } from "../components/api";

export default function ListUsers() {
  return (
    <APILoader
      url={"http://localhost:8080/api/v1/users"}
      Component={AdminLogin}
    />
  );
}

function AdminLogin({ data }) {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
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
    const array = [...data];
    for (let i = 0; i < array.length; i++) {
      if (
        user.username === array[i].username &&
        user.password === array[i].password &&
        array[i].admin === true
      ) {
        alert("Success");
        return router.push("/home");
      } else {
        return alert("Unsuccessful login attempt");
      }
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
          value={user.username}
          onChange={(e) => handleChange(e)}
          required
        ></input>

        <br></br>
        <input
          className={style.pwd}
          type="password"
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
