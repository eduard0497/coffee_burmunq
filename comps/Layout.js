import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Layout.module.css";
import Head from "next/head";
import Image from "next/image";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Coffee Burmunq</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.layout_mid_section_container}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;

const Navbar = () => {
  const [mobileNavbarActive, setmobileNavbarActive] = useState(false);

  const toggleBurger = () => {
    setmobileNavbarActive(!mobileNavbarActive);
  };

  const navbar_links = [
    {
      name: "Menu",
      link: "/menu",
    },
    {
      name: "About",
      link: "/about",
    },
  ];

  return (
    <div className={styles.navbar}>
      <div
        className={styles.navbar_logo}
        onClick={() => {
          setmobileNavbarActive(false);
        }}
      >
        <Link href="/">
          <Image
            href="/"
            src="/LOGO.svg"
            alt="My Logo"
            width={150}
            height={150}
          />
        </Link>
        {/* <Link href="/">
          <h1>COFFEE BURMUNQ</h1>
        </Link> */}
      </div>
      {/*  */}
      <ul className={styles.navbar_links}>
        {navbar_links.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
      {/*  */}

      <div className={styles.burger_menu} onClick={toggleBurger}>
        <span className={styles.burger_menu_line}></span>
        <span className={styles.burger_menu_line}></span>
        <span className={styles.burger_menu_line}></span>
      </div>
      <ul
        className={`${styles.navbar_links_mobile} ${
          mobileNavbarActive ? styles.navbar_links_mobile_visible : ""
        }`}
      >
        {navbar_links.map((link, index) => {
          return (
            <li key={index} onClick={toggleBurger}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_contact}>
        <h3>Contact Us</h3>
        <table className={styles.footer_contact_info_table}>
          <tbody>
            <tr>
              <td className={styles.footer_contact_info_left}>
                <p>Address:</p>
              </td>
              <td>
                <p>102 S Glendale Ave 1/2</p>
              </td>
            </tr>
            <tr>
              <td className={styles.footer_contact_info_left}>
                <p>City, State, Zip:</p>
              </td>
              <td>
                <p>Glendale, CA 91205</p>
              </td>
            </tr>
            <tr>
              <td className={styles.footer_contact_info_left}>
                <p>Phone:</p>
              </td>
              <td>
                <p>747-333-1952</p>
              </td>
            </tr>
            <tr>
              <td className={styles.footer_contact_info_left}>
                <p>Our Partner in Armenia:</p>
              </td>
              <td>
                <a
                  target="_blank"
                  href="https://coffeeburmunq.com/"
                  rel="noopener noreferrer"
                >
                  Coffee Mokate
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.footer_logo}>
        <h1>Coffee Mokate by Burmunq</h1>
      </div>
    </div>
  );
};
