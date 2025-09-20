import "./headerpage1.css";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import netflixlogo from "../images/netflixlogo.png";
import { Sidebar } from "primereact/sidebar";
import { GiHamburgerMenu } from "react-icons/gi";

function Headerpage1() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="header1">
      <div className="navright">
        <a href="">
          <img src={netflixlogo} />
        </a>
      </div>
      <div className="mobile-view">
        <GiHamburgerMenu
            size={30}
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => setIsVisible(!isVisible)}
          />
        <Sidebar visible={isVisible} position="right" onHide={() => setIsVisible(false)}>
          <div className="nav">
            <a href="/home" className={pathname === "/home" ? "active" : ""}>
              Home
            </a>
            <a href="/tvshows" 
              className={pathname === "/tvshows" ? "active" : ""}>
              TV Shows
            </a>
            <a
              href="/Movies"
              className={pathname === "/Movies" ? "active" : ""}
            >
              Movies
            </a>
            <a href="/new&popular" className={pathname === "/new&popular" ? "active" : ""}>
              New & Popular
            </a>
            <a href="/mylist" className={pathname === "/mylist" ? "active" : ""}>
              My List
            </a>
          </div>
          <div className="btn">
        <button>
          <a href="/">Logout</a>
        </button>
      </div>
          </Sidebar>
          </div>
          <div className="desktop">
            <div className="nav">
              <a href="/home" className={pathname === "/home" ? "active" : ""}>
                Home
              </a>
              <a href="/tvshows" 
                className={pathname === "/tvshows" ? "active" : ""}>
                TV Shows
              </a>
              <a
                href="/Movies"
                className={pathname === "/Movies" ? "active" : ""}
              >
                Movies
              </a>
              <a href="/new&popular" className={pathname === "/new&popular" ? "active" : ""}>
                New & Popular
              </a>
              <a href="/mylist" className={pathname === "/mylist" ? "active" : ""}>
                My List
              </a>
            </div>
            </div>
            <div className="btn">
        <button>
          <a href="/">Logout</a>
        </button>
      </div>
    </div>
  );
}

export default Headerpage1;
