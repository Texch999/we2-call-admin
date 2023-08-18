import React from "react";
import Marquee from "react-fast-marquee";
import { BiShareAlt } from "react-icons/bi";
import { Images } from "../../images";
import { AiFillWarning, AiOutlineSetting } from "react-icons/ai";
import { CiStickyNote } from "react-icons/ci";

function Header() {
  const matchEntryOptions = [
    {
      icon: <CiStickyNote />,
      name: "font-weight-bold",
    },
    {
      icon: <AiFillWarning />,
      name: "Share Risk",
    },
  ];
  return (
    <nav className="navbar navbar-expand-lg header-bg">
      <div className="container-fluid">
        <img src={Images.header_logo} className="head-image "></img>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a
                className="nav-link active font-white"
                aria-current="page"
                href="/rajinth"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Match Entry
              </a>
              <ul className="dropdown-menu">
                {matchEntryOptions.map((item, index) => {
                  return (
                    <li>
                      <div className="dropdown-item " href="#">
                        {item.icon}
                        {item.name}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Report
              </a>
              <ul className="dropdown-menu">
                {matchEntryOptions.map((item, index) => {
                  return (
                    <li>
                      <div className="dropdown-item " href="#">
                        {item.icon}
                        {item.name}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu">
                {matchEntryOptions.map((item, index) => {
                  return (
                    <li>
                      <div className="dropdown-item " href="#">
                        {item.icon}
                        {item.name}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
          <div>
            <BiShareAlt />
          </div>
          <div>
            <AiOutlineSetting />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
