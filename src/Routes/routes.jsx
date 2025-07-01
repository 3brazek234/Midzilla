import { createBrowserRouter } from "react-router-dom";
import Auth from "../Components/layout/authLayout/Auth";
import Login from "../Pages/login/Login";
import { DashBoardLayout } from "../Components/layout/dashBoardLayout/DashBoardLayout";
import Home from "../Pages/Home/Home";
import Bill from "../Pages/bill/Bill";
import Charts from "../Pages/charts/Charts";
import Orders from "../Pages/orders/Orders";
import Categories from "../Pages/categories/Categories";
import Products from "../Pages/products/Products";
import Users from "../Pages/Users/Users";
import AddUserForm from "../Components/pagesComponent/users/usersDetails/AddUserForm";
import TopRatedUser from "../Pages/Users/TopRatedUser";
import Roles from "../Pages/Roles/Roles";
import Admin from "../Pages/Admin/Admin";
import Permissions from "../Pages/Permissions/Permissions";
import ProfileSetting from "../Pages/ProfileSetting/ProfileSetting";
import Tickets from "../Pages/Tickets/Tickets";
import Disaccount from "../Pages/Disaccount/Disaccount";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Auth,
    children: [{ index: true, element: <Login /> }],
  },
  {
    path: "/dashboard",
    Component: DashBoardLayout,
    children: [
      { index: true, element: <Home /> },
      { path: "bills", element: <Bill /> },
      { path: "charts", element: <Charts /> },
      { path: "orders", element: <Orders /> },
      { path: "categories", element: <Categories /> },
      { path: "products", element: <Products /> },
      { path: "users", element: <Users /> },
      { path: "top-buyers", element: <TopRatedUser /> },
      { path: "users/add", element: <AddUserForm /> },
      { path: "roles", element: <Roles /> },
      { path: "admin", element: <Admin /> },
      { path: "permissions", element: <Permissions /> },
      { path: "profile-setting", element: <ProfileSetting /> },
      { path: "tickets", element: <Tickets /> },
      { path: "disaccount", element: <Disaccount /> },
    ],
  },
]);

export default routes;
