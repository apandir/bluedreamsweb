import { Outlet } from "react-router-dom";
import WebsiteNavbar from "./WebsiteNavbar";
import WebsiteFooter from "./WebsiteFooter";

const WebsiteLayout = () => {
  return (
    <div className="min-h-screen">
      <WebsiteNavbar />
      <Outlet />
      <WebsiteFooter />
    </div>
  );
};

export default WebsiteLayout;
