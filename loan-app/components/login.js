import Link from "next/link";
import { useState } from "react";
import style from "../styles/login.module.css";
import { useRouter } from "next/router";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

export default function AdminLogin() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const router = useRouter();
  const [user, setUser] = useState({
    username: null,
    password: null,
    admin: false,
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

    if (username === "Harv" && password === "bert" && admin === false) {
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
      <p className={style.subtitle}>User</p>
      <form align="center" onSubmit={handleSubmit(Login)}>
        <input
          className={style.uid}
          type="text"
          placeholder="Username"
          name="name"
          onChange={(e) => handleChange(e)}
          {...register("name", {
            required: "Name is required",
          })}
        ></input>
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <p>{message}</p>}
        />
        <br></br>
        <input
          className={style.pwd}
          type="password"
          placeholder="Password"
          name="password"
          {...register("password", {
            required: "Name is required",
          })}
        ></input>
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => <p>{message}</p>}
        />
        <br></br>
        <button className={style.logbttn} type="submit">
          Submit
        </button>
      </form>
      <MyLink className={style.accountBttn} href="/adminLogin">
        Switch account type?
      </MyLink>
      <MyLink className={style.registerBttn} href="/register">
        Register account
      </MyLink>
    </div>
  );
}
