import React from "react";
import css from "./Topbar.module.css";
import moment from "moment/moment";
import { IoIosSearch } from "react-icons/io";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Topbar = () => {
  const { pathname } = useLocation();
  return (
    <div className={css.layout}>
      <Sidebar />

      {pathname === "/" && <Navigate to="/dashboard" />}

      <div className={css.header}>
        <div className={css.header_main}>
          <span>{moment().format("dddd, Do MMM YYYY")}</span>

          <div className={css.searchbar}>
            <input type="text" placeholder="Search..." />
            <IoIosSearch size={20} />
          </div>

          <div className={css.profile}>
            <img src="./profile_av.png" alt="" />
            <div className={css.details}>
              <span>Denis Stevan</span>
              <p>denisstevan@gmail.com</p>
            </div>
          </div>
        </div>

        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
