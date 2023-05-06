import { useNavigate } from "react-router-dom";
import { HeaderMenu } from "../../COMMON/moks/headerMenu";

export const FooterComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="footer">
        <div className="footer-wrapper">
          <ul className="footer-menu">
            {HeaderMenu.map((el) => (
              <li
                className="footer-item"
                key={el.id}
                onClick={() => navigate(el.path)}
              >
                {el.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
