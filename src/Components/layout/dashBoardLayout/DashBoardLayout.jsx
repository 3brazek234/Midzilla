import { Outlet } from "react-router-dom";
import SideBar from "../../common/SideBar/SideBar";
import ProtectedLogin from "../../../Routes/ProtectedLogin";

export const DashBoardLayout = () => {
  return (
    <ProtectedLogin>
      <div className="flex h-screen">
        {/* <SideBar /> */}
        <SideBar />
        <div className="flex-1 p-8 overflow-auto">
          <Outlet />
        </div>
      </div>
    </ProtectedLogin>
  );
};
