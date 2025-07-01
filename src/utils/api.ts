import axios from "axios";

export const api = axios.create({
  baseURL: "https://app.quickly.codes/midzilla/public/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
