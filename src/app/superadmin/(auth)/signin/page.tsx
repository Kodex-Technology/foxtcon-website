"use client";
import React, { useState } from "react";
import "./page.scss";
import { ArrowRightIcon, EyeHideIcon, EyeIcon } from "@/svgs";
import { useRouter } from "next/navigation";
import { SuperAdminRoutes } from "@/constant/appRoutes";
const SgininPage = () => {
  const route = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const goToPage = () => {
    route.push(SuperAdminRoutes.DASHBOARD);
  };
  return (
    <div className="auth-page-wrapper">
      <div className="auth-page-container">
        <div className="auth-header">
          <h2>Welcome! First things first....</h2>
          <p>
            Create a profile to personalize how you’ll appear to collaborators
          </p>
        </div>
        <div className="auth-form">
          <div className="form-header">
            <img src="/iconFiles/foxtcon-color-logo.svg" alt="logo" />
            <p>One simple move, endless growth for your business.</p>
          </div>
          <div className="form-body">
            <div className="form-field">
              <input type="email" name="" id="" placeholder="Email" />
            </div>
            <div className="form-field field-icon">
              <input
                type={showPassword ? "text" : "password"}
                name=""
                id=""
                placeholder="Password"
              />
              <div
                className="icon"
                onClick={togglePassword}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <EyeHideIcon /> : <EyeIcon />}
              </div>
            </div>
          </div>
          <div className="form-footer">
            <div className="btn-wrapper">
              <button onClick={goToPage}>
                LET’S GO <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SgininPage;
