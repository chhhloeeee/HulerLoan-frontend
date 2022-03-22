import Link from "next/link";
import style from "../styles/login.module.css";

function MyLink(props) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}

export default function UserLogin() {
  return (
    <div className={style.appHeader}>
      <h2 className={style.title}>HulerLoan Login</h2>
      <p className={style.subtitle}>User</p>
      <input className={style.uid} type="text" placeholder="Username"></input>
      <input
        className={style.pwd}
        type="password"
        placeholder="Password"
      ></input>
      <MyLink className={style.logbttn} href="/home">
        Login
      </MyLink>
      <MyLink className={style.accountBttn} href="/">
        Switch account type?
      </MyLink>
      <MyLink className={style.registerBttn} href="/register">
        Register account
      </MyLink>
    </div>
  );
}