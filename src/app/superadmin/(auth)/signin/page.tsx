"use client";
import React, { useState } from "react";
import "./page.scss";
import { ArrowRightIcon, EyeHideIcon, EyeIcon } from "@/svgs";
import { useRouter } from "next/navigation";
import { SuperAdminRoutes } from "@/constant/appRoutes";
import { validateForm } from "@/shared/ValidationForm";
import { loginValidationRules } from "@/shared/ValidationRules";
import { useAppDispatch, useAppSelector } from "@/store/store";
import Loader from "@/components/common/Loader/Loader";
import { login } from "@/store/Slices/auth/authSlice";
import { MESSAGES } from "@/constant/message";
import { showToast } from "@/shared/toastUtils";
const SgininPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleCredential = (key: string, value: unknown) => {
    setCredentials((prev) => ({
      ...prev,
      [key]: value,
    }));
    if (value && value.toString().trim() !== "") {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[key];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailFields = ["email"];

    const validationErrors = validateForm(
      credentials,
      loginValidationRules,
      [],
      emailFields,
    );
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("credentials", credentials);
      dispatch(login(credentials))
        .unwrap()
        .then(() => {
          router.push(SuperAdminRoutes.DASHBOARD);
        })
        .catch((err) => {
          const errorMessage = Array.isArray(err)
            ? err.join(", ")
            : err || MESSAGES.AUTH.LOGIN_FAILED;
          showToast(errorMessage, "error");
        });
    }
  };

  return (
    <>
      {loading && <Loader />}
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
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => handleCredential("email", e.target.value)}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
              <div className="form-field field-icon">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  onChange={(e) => handleCredential("password", e.target.value)}
                />
                <div
                  className="icon"
                  onClick={togglePassword}
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? <EyeHideIcon /> : <EyeIcon />}
                </div>
                {errors.password && (
                  <p className="error-text">{errors.password}</p>
                )}
              </div>
            </div>
            <div className="form-footer">
              <div className="btn-wrapper">
                <button onClick={handleSubmit}>
                  LET’S GO <ArrowRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SgininPage;
