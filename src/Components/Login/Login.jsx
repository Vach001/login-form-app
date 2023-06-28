import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";

const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
const getStorage = (key) => JSON.parse(localStorage.getItem(key));

export default function () {
  const [firstName, setFirstName] = useState(getStorage("firstName") ?? "");
  const [lastName, setLastName] = useState(getStorage("lastName") ?? "");
  const [email, setEmail] = useState(getStorage("email") ?? "");
  const [password, setPassword] = useState(getStorage("password") ?? "");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => isDisabled(), [firstName, lastName, email, password]);

  function isDisabled() {
    if (!!firstName && !!lastName && !!email && !!password) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }

  return (
    <div className={styles.loginForm}>
        <><h1>LOGIN YOUR ACCOUNT</h1></>
      <form>
        <label className={styles.label}> First Name </label>
        <input
          className={styles.inputField}
          type="text"
          onChange={(e) => {
            setStorage("firstName", e.target.value);
            setFirstName(e.target.value);
          }}
          value={firstName}
          required
        />
        <br />

        <label className={styles.label}> Last Name </label>
        <input
          className={styles.inputField}
          type="text"
          onChange={(e) => {
            setStorage("lastName", e.target.value);
            setLastName(e.target.value);
          }}
          value={lastName}
          required
        />
        <br />

        <label className={styles.label}> Email </label>
        <input
          className={styles.inputField}
          type="Email"
          onChange={(e) => {
            setStorage("email", e.target.value);
            setEmail(e.target.value);
          }}
          value={email}
          required
        />
        <br />

        <label className={styles.label}> Password </label>
        <input
          className={styles.inputField}
          type="password"
          onChange={(e) => {
            setStorage("password", e.target.value);
            setPassword(e.target.value);
          }}
          value={password}
          required
        />
        <br />

        <button className={styles.button} disabled={disabled}>
          LOGIN
        </button>
      </form>
    </div>
  );
}
