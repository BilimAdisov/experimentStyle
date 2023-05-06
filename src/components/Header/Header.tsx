import { useLocation, useNavigate } from "react-router-dom";
import { HeaderMenu } from "../../COMMON/moks/headerMenu";

export const HeaderComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className={location.pathname === "/" ? "header" : "header active"}>
      <div className="header-wrapper">
        <ul className="menu">
          <li className="logo">Logo</li>
          {HeaderMenu.map((item) => (
            <li key={item.id} onClick={() => navigate(item.path)}>
              {item.name}
            </li>
          ))}
          <li className="lang">Рус</li>
        </ul>
      </div>
    </div>
  );
};
