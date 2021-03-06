import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { viewProfile } from "../../../apis";
import Loading from "../../Helper/Loading";
import LeftControl from "../AdminLeftControl";
import UserAvatarFrame from "../UserAvatarFrame";
import styles from "./AdminReportUserDetail.module.css";
import Frame from "../Frame";
import { LoadingUserManage } from "../../../assets/ExportImages";

const AdminReportUserDetail = () => {
  const [loadingPage, setLoadingPage] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();
  const { userId } = useParams();

  const handleClickUpdate = () => {
    navigate(`/admin/users-manager/update-user/${userId}`);
  };

  useEffect(() => {
    const loadViewProfile = async () => {
      const data = await viewProfile({ userId });
      if (data.error === "User not found") {
        toast.error("User not found !!!".toLocaleUpperCase());
      } else {
        setUserInfo(data);
        setLoadingPage(false);
      }
    };

    loadViewProfile();
  }, []);

  return (
    <Frame titleToggle="users">
      <div className="d-flex">

        {userInfo && <UserAvatarFrame userInfo={userInfo} />}
        {loadingPage ? (
          <Loading srcIcon={LoadingUserManage} />
        ) : (
          <section className={` col-7 ${styles.boxPersonalInformation}`}>
            <div className={`d-flex ${styles.personalInformation}`}>
              <span>View user account</span>
            </div>
            <form>
              <ul className={styles.boxInformation}>
                <li className={`d-flex ${styles.item}`}>
                  <label>Fullname </label>
                  <p>{userInfo.fullName}</p>
                </li>
                <li className={`d-flex ${styles.item}`}>
                  <label>Email </label>
                  <p>{userInfo.email}</p>
                </li>
                <li className={`d-flex ${styles.item}`}>
                  <label>Gender</label>
                  <p>{userInfo.gender}</p>
                </li>
                <li className={`d-flex ${styles.item}`}>
                  <label>Store name </label>
                  <p>{userInfo.storeName}</p>
                </li>
              </ul>
              <ul className={styles.boxInformation}>
                <li className={`d-flex ${styles.item}`}>
                  <label>City/Province </label>
                  <p>{userInfo.hometown}</p>
                </li>
                <li className={`d-flex ${styles.item}`}>
                  <label>District </label>
                  <p>{userInfo.district}</p>
                </li>
                <li className={`d-flex ${styles.item}`}>
                  <label>Ward </label>
                  <p>{userInfo.ward}</p>
                </li>
                <li className={`d-flex ${styles.item}`}>
                  <label>Address </label>
                  <p>{userInfo.address}</p>
                </li>
                <li className={`d-flex ${styles.item}`}>
                  <label>Phone number </label>
                  <p>{userInfo.phoneNumber}</p>
                </li>
              </ul>
              <ul className={styles.boxInformation}>
                <li className={`d-flex ${styles.item}`}>
                  <label>Username </label>
                  <p>{userInfo.userName}</p>
                </li>
                <li className={`d-flex ${styles.item}`}>
                  <label>Password </label>
                  <p>{userInfo.password}</p>
                </li>
              </ul>
              <div
                className={` d-flex justify-content-center ${styles.btnUpdate}`}
              >
                <button onClick={handleClickUpdate} className="btn">Update</button>
              </div>
            </form>
          </section>
        )}
      </div>
    </Frame>
  );
};

export default AdminReportUserDetail;
