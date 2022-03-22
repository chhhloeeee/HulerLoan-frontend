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
      <h2 className={style.title}>Register Account</h2>
      <input className={style.uid} type="text" placeholder="Email"></input>
      <MyLink className={style.logbttn} href="/">
        Submit
      </MyLink>
      <MyLink className={style.accountBttn} href="/">
        Login?
      </MyLink>
    </div>
  );
}