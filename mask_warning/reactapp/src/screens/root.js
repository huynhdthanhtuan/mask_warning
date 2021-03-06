import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Guide,
  GuideConnectCamera,
  GuideReportDefect,
  ConnectCamera,
  Camera,
  Report,
  ReportHistory,
  ReportHistoryDetail,
  AboutUs,
  Signin,
  Profile,
  ForgotPassword,
  ForgotPasswordEnterCode,
  ForgotPasswordCreateNewPassword,
  ChangePassword,
  ProfileChangeInformation,
  ProfilePassword,
  Footer,
} from "../components";

import {
  AdminSignin,
  AdminHome,
  AdminReportsManager,
  AdminUsersManager,
  AdminReportDetail,
  AdminReportUserDetail,
  AdminUpdateUser,
  AdminCreateUser,
} from "../components/Admin";

const ScreensRoot = () => {
  return (
    <Routes>
      {/* ROLE: USER */}
      <Route path="/" element={<Home />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/guide-connect-camera" element={<GuideConnectCamera />} />
      <Route path="/guide-report-defect" element={<GuideReportDefect />} />
      <Route path="/camera" element={<Camera />} />
      <Route path="/connect-camera" element={<ConnectCamera />} />
      <Route path="/report" element={<Report />} />
      <Route path="/report-history" element={<ReportHistory />} />
      <Route
        path="/report-history-detail/:reportId"
        element={<ReportHistoryDetail />}
      />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/profile-change-information"
        element={<ProfileChangeInformation />}
      />
      <Route path="/profile-password" element={<ProfilePassword />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route
        path="/forgot-password-enter-code"
        element={<ForgotPasswordEnterCode />}
      />
      <Route
        path="/forgot-password-create-new-password"
        element={<ForgotPasswordCreateNewPassword />}
      />
      <Route path="/change-password" element={<ChangePassword />} />

      {/* ROLE: ADMIN */}
      <Route path="/admin/signin" element={<AdminSignin />} />
      <Route path="/admin/home" element={<AdminHome />} />
      <Route path="/admin/users-manager" element={<AdminUsersManager />} />
      <Route
        path="/admin/users-manager/create-user"
        element={<AdminCreateUser />}
      />
      <Route
        path="/admin/users-manager/update-user/:userId"
        element={<AdminUpdateUser />}
      />
      <Route
        path="/admin/users-manager/user-detail/:userId"
        element={<AdminReportUserDetail />}
      />
      <Route
        path="/admin/reports-manager/report-detail/:reportId"
        element={<AdminReportDetail />}
      />
      <Route
        path="/admin/reports-manager/user-detail/:userId"
        element={<AdminReportUserDetail />}
      />
      <Route path="/admin/reports-manager" element={<AdminReportsManager />} />
    </Routes>
  );
};

export default ScreensRoot;
