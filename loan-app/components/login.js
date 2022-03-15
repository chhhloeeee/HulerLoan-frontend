import Link from 'next/link'
import style from '../styles/login.module.css'

function MyLink(props) {
  let { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  )
}

export default function Login() {
    return (
      <div className={style.appHeader}> 
        <input className={style.uid} type="text" placeholder="Username" onChange={(event) => setUserName(event.target.value)} style={{fontSize:20, width:250}}></input>
        <input className={style.pwd} type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} style={{fontSize:20, width:250}}></input>
        <MyLink className={style.logbttn} href="/home">Login</MyLink>
      </div>
    );
  };