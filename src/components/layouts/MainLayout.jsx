import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex m-6">
      {/* <div className="w-[80px]">
        <SideBar />
      </div> */}
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
