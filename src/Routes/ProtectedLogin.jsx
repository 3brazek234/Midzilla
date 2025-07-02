import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function ProtectedLogin({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    return navigate("/");
  }
  return children;
}
