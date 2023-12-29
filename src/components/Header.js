import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo">SpiceDash</div>
      <div className="nav-items">
        <ul>
          <li className="list-item">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="list-item">
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Home
            </Link>
          </li>
          <li className="list-item">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="list-item">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li className="list-item">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/grocery"
            >
              Grocery
            </Link>
          </li>
          <li className="list-item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
