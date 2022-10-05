// Import's
import Image from "next/image";
import Link from "next/link";

// Asset's
import styles from "../styles/Style.module.css";
import logo from "../assets/logo.svg";
import rightSideImage from "../assets/rightSideImage.png";
import googleLogo from "../assets/googleLogo.svg";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.leftSide}>
        <header className={styles.headerContainer}>
          <div className={styles.logo}>
            <Image src={logo} alt="" />
          </div>

          <main className={styles.loginArea}>
            <div className={styles.loginContent}>
              <h1 className={styles.mainPhrase}>Welcome back</h1>
              <p className={styles.subPhrase}>
                Please enter your contact details to connect.
              </p>

              <div className={styles.inputsArea}>
                <div className={styles.mailInput}>
                  <strong>Email address</strong>
                  <input type="text" placeholder="name@company.com" />
                </div>

                <div className={styles.passwordInput}>
                  <strong>Password</strong>
                  <input type="password" placeholder="123@456" />
                </div>
              </div>

              <div className={styles.smallArea}>
                <div className={styles.checkBox}>
                  <input type="checkbox" />
                  <p>Remember me</p>
                </div>

                <div className={styles.recoveryPassword}>
                  <Link href={""}>
                    <a>Forgot password</a>
                  </Link>
                </div>
              </div>

              <div className={styles.buttonArea}>
                <button className={styles.loginButton}>Log in</button>

                <button className={styles.loginGoogleButton}>
                  <div className={styles.logoGoogle}>
                    <Image src={googleLogo} alt="" />
                  </div>
                  Log in with Google
                </button>

                <p className={styles.signUpLink}>
                  Don&apos;t have an account?{" "}
                  <Link href={""}>
                    <a>Sign up here</a>
                  </Link>
                </p>
              </div>
            </div>
          </main>
        </header>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.image}>
          <Image src={rightSideImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
