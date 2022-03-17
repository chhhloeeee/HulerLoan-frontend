import React from "react";
import Link from 'next/link'
import styles from '../styles/form.module.css'

function MyLink(props) {
    let { href, children, ...rest } = props
    return (
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    )
  }

const Button = ({ text, href}) => {
  return (
    <MyLink className={styles.bttn} href={href}>{text}</MyLink>
  );
};

export default Button;
