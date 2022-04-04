import React, { useEffect, useState } from "react";
import styles from "./UsersManager.module.css";
import { Link } from "react-router-dom";

const UsersManagerAdmin = () => {
  const [toggle, setToggle] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.homeMain}>
      <div>Users</div>
    </section>
  );
};

export default UsersManagerAdmin;
