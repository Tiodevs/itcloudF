"use client"

import Link from 'next/link'
import styles from './styles.module.scss'
import styless from './hamburgers.module.css'
import Image from 'next/image'

import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';

export function Header() {
  const [isactive, setIsactive] = useState(false);

  // Verifica se a rota é ativa
  const pathname = usePathname(); // Pega a rota ativa
  const isActive = (path: string) => pathname === path;

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/attendence">
          <Image
            alt="Logo Sujeito Pizza"
            src={"/logo.svg"}
            width={116}
            height={70}
            priority={true}
            quality={100}
          />
        </Link>

        <button onClick={() => setIsactive(!isactive)} className={`${styless.hamburger} ${isactive ? styless.isactive : ""} ${styless.hamburgerspin} ${styles.btnnav}`}>
          <div className={styless.hamburgerbox}>
            <div className={styless.hamburgerinner}></div>
          </div>
        </button>


        <nav className={`${isactive ? styles.isactive : ""} ${styles.navmobi}`}>

          <Link className={isActive("/") ? styles.active : styles.link} href="/">
            <p>Home</p>
          </Link>

          <Link className={isActive("/blog") ? styles.active : styles.link} href="/blog">
            <p>Blog</p>
          </Link>
          <Link className={styles.link} href="/en">
          <Image
            alt="Logo Sujeito Pizza"
            src={"/iconen.svg"}
            width={70}
            height={70}
            priority={true}
            quality={100}
          />
          </Link>
        </nav>

        <nav className={styles.nav}>
          <Link className={isActive("/") ? styles.active : styles.link} href="/">
            <p>Home</p>
          </Link>

          <Link className={isActive("/blog") ? styles.active : styles.link} href="/blog">
            <p>Blog</p>
          </Link>
          <Link className={styles.link} href="/en">
          <Image
            alt="Logo Sujeito Pizza"
            src={"/iconen.svg"}
            width={70}
            height={70}
            priority={true}
            quality={100}
          />
          </Link>
        </nav>


      </div>
    </header>
  )
}