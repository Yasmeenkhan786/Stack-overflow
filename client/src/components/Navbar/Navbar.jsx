import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo1 from "../../assets/logo.png";
import icon from "../../assets/icon.png";
import search from "../../assets/search.svg";
import Avatar from "../../components/Avatar/Avatar";
import "./Navbar.css";
import { setCurrentUser } from "../../actions/CurrentUse";
import decode from "jwt-decode";
// import "../LeftSidebar/LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/globe.svg";
import hamburger from "../../assets/hamburger.png";
import close from "../../assets/close.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState("");
  // const [close, setClose] = useState("false");
  var User = useSelector((state) => state.currentUserReducer);

  const handleLogout = () => {
    dispatch({ type: " LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
    {
      sidebar ? setSidebar((prev) => !prev) : setSidebar(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }

    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);
  const menuref = useRef(null);
  const handleClickOutside = (e) => {
    if (!menuref.current.contains(e.target)) {
      setSidebar(false);
    }
  };
  return (
    <>
      <nav className="main-nav">
        <div className="navbar">
          <Link to="/" className="nav-item nav-logo">
            <img src={logo1} alt="logo" />
          </Link>
          <img
            src={sidebar ? close : hamburger}
            ref={menuref}
            alt=""
            srcset=""
            className="nav-menu"
            onClick={() => setSidebar((prev) => !prev)}
          />

          <Link
            to="/"
            className="
         nav-icon"
          >
            <img src={icon} alt="logo" />
          </Link>
          <Link to="/" className="nav-item nav-btn">
            About
          </Link>
          <Link to="/" className="nav-item nav-btn">
            Products
          </Link>
          <Link to="/" className="nav-item nav-btn">
            For Teams
          </Link>
          <form action="">
            <input type="text" placeholder="Search..." />
            <img src={search} alt="" srcset="" width="18" className="search-icon" />
          </form>
          {User === null ? (
            <Link to="/Auth" className="nav-item nav-links">
              Log In
            </Link>
          ) : (
            <>
              <Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" color="white">
                <Link
                  to={`/Users/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button className="nav-item nav-links" onClick={handleLogout}>
                Log Out
              </button>
            </>
          )}
        </div>
      </nav>
      {sidebar && (
        <div className="left-sidebar1">
          <nav className="side-nav1"></nav>
          <NavLink
            to="/"
            className="side-nav-links"
            activeClass="active"
            onClick={() => setSidebar((prev) => !prev)}
          >
            <p>Home</p>
          </NavLink>
          <div className="side-nav1-div">
            <div>
              <p style={{ paddingLeft: "10px" }}>PUBLIC</p>
            </div>

            <NavLink
              to="/Questions"
              className="side-nav-links"
              activeClass="active"
              onClick={() => setSidebar((prev) => !prev)}
            >
              <img src={Globe} alt="Globe" width="18px" />
              <p style={{ paddingLeft: "10px" }}>Questions</p>
            </NavLink>
            <NavLink
              to="/Tags"
              className="side-nav-links"
              activeClass="active"
              style={{ paddingLeft: "40px" }}
              onClick={() => setSidebar((prev) => !prev)}
            >
              <p>Tags</p>
            </NavLink>

            <NavLink
              to="/Users"
              className="side-nav-links"
              activeClass="active"
              style={{ paddingLeft: "40px" }}
              onClick={() => setSidebar((prev) => !prev)}
            >
              <p>Users</p>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
