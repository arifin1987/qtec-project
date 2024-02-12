import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const MainLayout = () => {
  return (
    <div className="flex">
      <div className="w-[80px]">
        <SideBar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
