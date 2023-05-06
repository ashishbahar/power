import React, { useState } from "react";
import pagelogo from "../assets/images/svg/pagelogo.svg";
import cross from "../assets/images/svg/cross.svg";
const MyNav = () => {
  const [first, setfirst] = useState(true);
  if (first) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <nav className="bg_green">
      
      <div className=" custom_container">
        <div className="d-flex justify-content-between align-items-center ">
          <img className="c_pointer me-5" src={pagelogo} alt="pagelogo" />
          <ul
            className={
              first
                ? "d-flex mb-0 ps-0  ps-lg-5 ms-lg-5 align-items-center flex-column flex-lg-row mobile_ul gap-4 gap-lg-0 hide"
                : "d-flex mb-0 ps-0 ps-lg-5 ms-lg-5 align-items-center flex-column flex-lg-row mobile_ul gap-4 gap-lg-0 show "
            }
          >
            <img
              onClick={() => {
                setfirst(true);
              }}
              className=" cross_position d-lg-none"
              src={cross}
              alt=" cross"
            />
            <li className=" white_before">
              <a
                href="#"
                className="position-relative z_index_100 hover_underline ff_comic fs_sm text-white"
              >
                HOME
              </a>
            </li>
            <li className="ms-lg-4 ps-1 white_before2">
              <a
                href="#"
                className="hover_underline position-relative z_index_100 ff_comic fs_sm text-white text-uppercase"
              >
                Campgrounds
              </a>
            </li>
            <li className="ms-lg-4 ps-1 white_before3">
              <a
                href="#"
                className="hover_underline position-relative z_index_100 ff_comic fs_sm text-white"
              >
                About us
              </a>
            </li>
            <li className="ms-lg-4 ps-1 white_before4">
              <a
                href="#"
                className="hover_underline position-relative z_index_100 ff_comic fs_sm text-white"
              >
                Contact
              </a>
            </li>
            <div className=" d-lg-none">
              {" "}
              <button className=" ff_comic fw-bold text-white nav_btn_modify">
                Sign Up
              </button>
              <button className=" ff_comic fw-bold text-white nav_btn_modify">
                Log in
              </button>
            </div>
          </ul>
          <div className="btns d_max_none">
            <button className=" ff_comic fw-bold text-white nav_btn_modify">
              Sign Up
            </button>
            <button className=" ff_comic fw-bold text-white nav_btn_modify">
              Log in
            </button>
          </div>
          <div
            onClick={() => {
              setfirst(false);
            }}
            className="menuicon d-lg-none "
          >
            <div className="line"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MyNav;
