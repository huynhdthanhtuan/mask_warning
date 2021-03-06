import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { viewDetailUser } from "../../../apis";
import Frame from "../Frame";
import TableUsers from "../TableUsers";
import UserInFormation from "./UserInFormation";
import Loading from "../../Helper/Loading";

const UsersDetail = () => {
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(true);

  const { userId } = useParams();
  console.log(userId);
  const loadReportDetailUser = async () => {
    await viewDetailUser({ userId }).then((data) => {
      // console.log(data);
      setUserInfo(data);
      setLoading(false);
    });
  };

  // console.log("user detail ", userInfo);
  useEffect(() => {
    loadReportDetailUser();
  }, []);
  console.log(userInfo);
  return (
    <Frame>{loading ? <Loading /> : <UserInFormation data={userInfo} />}</Frame>
  );
};
export default UsersDetail;
