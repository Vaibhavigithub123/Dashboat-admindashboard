import React from "react";
import css from "./Sidebar.module.css";
import { IoIosMenu } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { IoIosAnalytics } from "react-icons/io";
import { HiUsers } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import { MdOutlineViewKanban } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { RiProductHuntLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside className={css.sidebar}>
        <div className={css.logo}>
          <h1>DashBoat</h1>
          <IoIosMenu size={30} />
        </div>

        <div className={css.menu}>
          <NavLink to="dashboard" className={css.item}>
            <RxDashboard size={23} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/analytics" className={css.item}>
            <IoIosAnalytics size={23} />
            <span>Analytics</span>
          </NavLink>

          <NavLink to="/users" className={css.item}>
            <HiUsers size={23} />
            <span>Users</span>
          </NavLink>

          <NavLink to="/newuser" className={css.item}>
            <HiUser size={23} />
            <span>New User</span>
          </NavLink>

          <NavLink to="/products" className={css.item}>
            <AiOutlineProduct size={23} />
            <span>Products</span>
          </NavLink>

          <NavLink to="/newproduct" className={css.item}>
            <RiProductHuntLine size={23} />
            <span>New Product</span>
          </NavLink>

          <NavLink to="/board" className={css.item}>
            <MdOutlineViewKanban size={23} />
            <span>Kanban</span>
          </NavLink>

          <NavLink to="/calendar" className={css.item}>
            <IoCalendarOutline size={23} />
            <span>Calendar</span>
          </NavLink>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
