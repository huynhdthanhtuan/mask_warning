import React, { useContext, useState } from "react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../App";
import { isAuthenticated } from "../Auth";
import { signOutApi } from "../../apis";
import { LogOutIcon, UserAvatar } from "../../assets/ExportImages";
import {
  AboutUsIcon,
  HomeIcon,
  GuideIcon,
  CameraIcon,
  StatisticIcon,
  ReportIcon,
  LogoImage,
  SigninIcon,
  userAvatar,
} from "../../assets/ExportImages";
import Modal from "../Helper/Modal";

const Header = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);
  const { token } = isAuthenticated();
  const notify = () => {
    if (notify) {
      toast.info("PLEASE SIGNIN FIRST !!");
    }
  };

  const handleSignout = async () => {
    const data = await signOutApi();

    if (data.message === "Sign out success !!") {
      localStorage.removeItem("jwt");
      dispatch({ type: "CLEAR" });
      toast.success(data.message.toLocaleUpperCase());
      navigate("/signin");
    }
  };

  const render = () => {
    if (isAuthenticated()) {
      return (
        <>
          <Link to="/profile">
            <div className={styles.headerLogin}>
              <img src={UserAvatar} alt="" />
              <p>Profile</p>
            </div>
          </Link>
          <div
            className={styles.headerLogin}
            onClick={() => setModalOpen(true)}
          >
            <img src={LogOutIcon} alt="" />
            <p>Sign Out</p>
          </div>
        </>
      );
    } else
      return (
        <div className={styles.headerLogin} onClick={() => navigate("/signin")}>
          <img src={SigninIcon} alt="" />
          <p>Sign In</p>
        </div>
      );
  };

  return (
    <header className={`container ${styles.header}`}>
      <div className={styles.headerLogo}>
        <Link to="/">
          <img alt="" src={LogoImage} />
        </Link>
      </div>
      <nav className={`${styles.headerNavigation}`}>
        <ul className=" d-flex">
          <li>
            <Link to="/">
              <img src={HomeIcon} alt="" />
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to={token ? "/guide" : "/signin"} onClick={!token && notify}>
              <img alt="" src={GuideIcon} />
              <p>Guide</p>
            </Link>
          </li>
          <li>
            <Link to={token ? "/camera" : "/signin"} onClick={!token && notify}>
              <img alt="" src={CameraIcon} />
              <p>Camera</p>
            </Link>
          </li>
          <li>
            <Link
              to={token ? "/statistic" : "/signin"}
              onClick={!token && notify}
            >
              <img alt="" src={StatisticIcon} />
              <p>Statistic</p>
            </Link>
          </li>
          <li>
            <Link to={token ? "/report" : "/signin"} onClick={!token && notify}>
              <img alt="" src={ReportIcon} />
              <p>Report</p>
            </Link>
          </li>
          <li>
            <Link to="/about-us">
              <img src={AboutUsIcon} alt="" />
              <p>About us</p>
            </Link>
          </li>
        </ul>
      </nav>
      {render()}
      {modalOpen && (
        <Modal
          body="Are you sure to sign out ??"
          setOpenModal={setModalOpen}
          action={handleSignout}
          isCss={true}
        />
      )}
    </header>
  );
};

export default Header;
