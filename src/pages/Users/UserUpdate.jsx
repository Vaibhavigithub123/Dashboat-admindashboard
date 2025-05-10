import React from "react";
import css from "./UserUpdate.module.css";
import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";

const UserUpdate = () => {
  return (
    <div className={css.userupdate}>
      <div className={css.userTitleContainer}>
        <h1 className={css.userTitle}>Edit User</h1>
        <Link to="/newuser">
          <button className={css.userAddbtn}>Create</button>
        </Link>
      </div>

      <div className={css.userContainer}>
        <div className={`${css.userShow} themeContainer`}>
          <div className={css.userProfile}>
            <img
              src="https://images.pexels.com/photos/10171449/pexels-photo-10171449.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="user-profile"
            />
            <div className={css.userTopTitle}>
              <span className={css.userProfileTitle}>Jerrom Harris</span>
              <p className={css.userProfession}>Software Engineer</p>
            </div>
          </div>

          <div className={css.userdetailsBottom}>
            <span className={css.userProfession}>Account Details</span>
            <div className={css.userAccountInfo}>
              <FaUser size={"20px"} />
              <p>jerromharris99</p>
            </div>
            <div className={css.userAccountInfo}>
              <FaCalendar size={"20px"} />
              <p>10.12.1999</p>
            </div>
            <div className={css.userAccountInfo}>
              <IoMdPhonePortrait size={"20px"} />
              <p>+1 542 45677</p>
            </div>
            <div className={css.userAccountInfo}>
              <SiMinutemailer size={"20px"} />
              <p>jerromharris@gmail.com</p>
            </div>
            <div className={css.userAccountInfo}>
              <IoLocation size={"20px"} />
              <p>New Yok | Usa</p>
            </div>
          </div>
        </div>
        <div className={`${css.userUpdate} themeContainer`}>
          <span className={css.edit}>Edit</span>
          <form className={css.userUpdateForm}>
            <div className={css.userUpdateItem}>
              <div className={css.userUpdateInput}>
                <label>Full Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className={css.userUpdateInput}>
                <label>Username</label>
                <input type="text" placeholder="Username" />
              </div>
            </div>

            <div className={css.userUpdateItem}>
              <div className={css.userUpdateInput}>
                <label>DOB</label>
                <input type="text" placeholder="DOB" />
              </div>

              <div className={css.userUpdateInput}>
                <label>Email</label>
                <input type="text" placeholder="Email" />
              </div>
            </div>

            <div className={css.userUpdateItem}>
              <div className={css.userUpdateInput}>
                <label>Mobile</label>
                <input type="text" placeholder="Mobile" />
              </div>

              <div className={css.userUpdateInput}>
                <label>Location</label>
                <input type="text" placeholder="Location" />
              </div>
            </div>

            <div className={css.userUpdatebtn}>
              <button>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserUpdate;
