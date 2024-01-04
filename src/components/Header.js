import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  return (
    <div className="flex justify-between shadow-lg mb-4">
      <div className="p-8 font-medium text-xl">SpiceDash</div>
      <div>
        <ul className="flex">
          <li className="p-8">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="p-8">
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Home
            </Link>
          </li>
          <li className="p-8">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="p-8">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li className="p-8">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/grocery"
            >
              Grocery
            </Link>
          </li>
          <li className="p-8">Cart</li>
          <li className="p-8">
            Login: <span className="font-medium">{data.loggedInUser}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
