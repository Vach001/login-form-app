import React, { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.loginForm}>
      <h1>LOGIN YOUR ACCOUNT</h1>
      <form onSubmit="">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input type="password" placeholder="Password" value={password}>
          onChange={(e) => setPassword(e.target.value)}
        </input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
