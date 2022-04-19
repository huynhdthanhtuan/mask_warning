import React, { useRef, useEffect, useContext } from "react";
import styles from "./Signin.module.css";
import Header from "../Header";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { signInAPI } from "../../apis";
import { authenticate } from "../Auth";
import { UserContext } from "../../App";

const SignIn = () => {
  const navigate = useNavigate();
  const userNameInputRef = useRef();
  const passwordInputRef = useRef();
  const { state, dispatch } = useContext(UserContext);

  const handleSignin = async (e) => {
    e.preventDefault();

    // Call API
    const data = await signInAPI({
      userName: userNameInputRef.current.value,
      password: passwordInputRef.current.value,
    });

    // Xử lí kết quả trả về từ API
    switch (data.message) {
      case "Please enter all information":
        toast.error(data.message.toLocaleUpperCase());
        break;
      case "Please enter password has more 8 characters":
        toast.error(data.message.toLocaleUpperCase());
        break;
      case "User name and password do not match":
        toast.error(data.message.toLocaleUpperCase());
        break;
      case "Signin success":
        authenticate(data, () => {
          dispatch({ type: "USER", payload: data.user });
          toast.success(data.message.toLocaleUpperCase());
          navigate("/");
        });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className={styles.main}>
        <form className={styles.form} id="form-1">
          <h2 className={styles.headingSignIn}>Sign In</h2>
          <h4 className={styles.heading}>
            Sign in and start experiencing our app!
          </h4>
          <p className={styles.desc}>
            Welcome back! Please signin to your account.{" "}
          </p>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>User name</label>
            <input
              className={styles.formControl}
              type="text"
              placeholder="eg: Hamesh"
              ref={userNameInputRef}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Password</label>
            <input
              className={styles.formControl}
              type="password"
              ref={passwordInputRef}
            />
          </div>
          <div className={styles.signinAdmin}>
            <Link to="/admin/signin">
              <p>Sign In with role Admin</p>
            </Link>
          </div>
          <div className={styles.formRemind}>
            <div className={styles.formRemember}>
              <input className={styles.formControl} type="checkbox" />
              <span
                className={styles.formRememberText}
                style={{ fontSize: "14px" }}
              >
                Remember Me
              </span>
            </div>
            <Link to="/forgot-password" className={styles.formForgotPassword}>
              Forgot Password?
            </Link>
          </div>

          <button
            type="button"
            className={`${styles.formSubmit}`}
            onClick={(e) => handleSignin(e)}
          >
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};
export default SignIn;
