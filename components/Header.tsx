'use client'
import React, { useEffect } from "react";
import Link from "next/link";
import classes from "@/app/page.module.css"
import {usePathname} from "next/navigation";

function Header() {
    const param = usePathname()
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li className={param === "/" ? classes.active : undefined}><Link href="/">Home</Link></li>
          <li className={param === "/blog" ? classes.active : undefined}><Link href="/blog" >Blog</Link></li>
          <li className={param === "/Sign up" ? classes.active : undefined}><Link href="/" >Sign up</Link></li>
          <li className={param === "/Login" ? classes.active : undefined}><Link href="/" >Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
