import { useForm } from "react-hook-form";
import Link from "next/link";
import style from "../styles/login.module.css";
import { useRouter } from "next/router";
import { ErrorMessage } from "@hookform/error-message";

function MyLink(props) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}

export default function UserLogin() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const router = useRouter();

  const onSubmit = () => {
    alert("Submitted!");
    router.push("/");
  };

  return (
    <div className={style.appHeader}>
      <h2 className={style.title}>Register Account</h2>
      <form align="center" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className={style.uid}
            type="text"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Please enter a valid email",
              },
            })}
            placeholder="Email"
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <p>{message}</p>}
          />
          <br></br>
          <button className={style.logbttn} type="submit">
            Submit
          </button>
        </div>
      </form>
      <MyLink className={style.accountBttn} href="/">
        Login?
      </MyLink>
    </div>
  );
}
