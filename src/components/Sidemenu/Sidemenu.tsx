import { Link, useLocation } from "react-router-dom";
import TwnLogo from "../../assets/logo.svg";
import FileIcon from "../../assets/file-icon.svg";
import TableIcon from "../../assets/table-icon.png";
import { useState } from "react";

interface SidemenuProps {}

export const Sidemenu: React.FC<SidemenuProps> = () => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive((active) => !active);
  };

  const location = useLocation();

  return (
    <aside className={`sidemenu ${active && "sidemenu--active"}`}>
      <button
        className={`sidemenu__toggle ${active && "sidemenu__toggle--active"}`}
        onClick={handleToggle}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <Link to="/">
        <img src={TwnLogo} alt="" className="sidemenu__logo" onClick={() => setActive(!active)} />
      </Link>
      <nav>
        <ul>
          <Link to="/article">
            <li
              className={`${location.pathname === "/article" && "active"}`}
              onClick={() => setActive(!active)}
            >
              Artikkel <img src={FileIcon} alt="" />
            </li>
          </Link>
          <Link to="/table">
            <li
              className={`${location.pathname === "/table" && "active"}`}
              onClick={() => setActive(!active)}
            >
              Tabel <img src={TableIcon} alt="" />
            </li>
          </Link>
        </ul>
      </nav>
    </aside>
  );
};
