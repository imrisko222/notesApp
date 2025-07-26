import React from "react";
import Logo from "../Logo/Logo";
import Input from "../Input/Input";
import Button from "../Buttons/Button";
import ShowIcon from "../icons/show.svg?react";
import GoogleIcon from "../icons/icon-google.svg?react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.mainContainer}>
      <header className={styles.headerContainer}>
        <Logo />
        <h1>Welcome to Note</h1>
        <p>Please log in to continue</p>
      </header>
      <main className={styles.loginContainer}>
        <Input
          type="email"
          placeholderText="email@example.com"
          nameLabel="Email Address"
        />
        <Input type="password" endIcon={<ShowIcon />} nameLabel="Password" />
        <Button textSize="textPreset3">Login</Button>
        <section className={styles.alternativeLogin}>
          <p>Or log in with:</p>
          <Button icon={<GoogleIcon />} variant="border">
            Google
          </Button>
        </section>
      </main>
      <div className={styles.divider}></div>
      <footer className={styles.footerPrompt}>
        <p>
          Not account yet? <a>Sign up</a>
        </p>
      </footer>
    </div>
  );
};

export default Login;
