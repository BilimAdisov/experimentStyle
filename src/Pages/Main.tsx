import { Outlet, useLocation } from "react-router-dom";
import { HeaderComponent } from "../components/Header/Header";
import { FooterComponent } from "../components/Footer/Footer";

export const MainPage = () => {
  const location = useLocation();
  return (
    <>
      <div
        className={
          location.pathname === "/" || location.pathname === "/contact"
            ? "main"
            : "main active"
        }
      >
        <div className="main-wrapper">
          <HeaderComponent />
          <Outlet />
          <FooterComponent />
        </div>
      </div>
    </>
  );
};
