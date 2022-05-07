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
  console.log(data);
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

    for (var key in data) {
      for (var key1 in data[key]) {
        if (user.username && user.password === data[key][key1]) {
          alert("found");
        }
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
