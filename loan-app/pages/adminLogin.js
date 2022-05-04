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
    userID: "",
    name: "",
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
          value={user.password}
          {...register("password", {
            required: "Password is required",
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
      <MyLink className={style.accountBttn} href="/">
        Switch account type?
      </MyLink>
      <MyLink className={style.registerBttn} href="/register">
        Register account
      </MyLink>
    </div>
  );
}
