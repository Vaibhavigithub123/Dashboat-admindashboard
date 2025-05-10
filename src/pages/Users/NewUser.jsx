import React from "react";
import css from "./NewUser.module.css";

const NewUser = () => {
  return (
    <div className={`${css.NewUser} themeContainer`}>
      <h1 className={css.newuserTitle}>New User</h1>
      <form className={css.newuserform}>
        <div className={css.newuserItem}>
          <label>Username</label>
          <input type="text" placeholder="Username" />
        </div>

        <div className={css.newuserItem}>
          <label>Full Name</label>
          <input type="text" placeholder="Your name" />
        </div>

        <div className={css.newuserItem}>
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>

        <div className={css.newuserItem}>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>

        <div className={css.newuserItem}>
          <label>Mobile</label>
          <input type="text" placeholder="Mobile" />
        </div>

        <div className={css.newuserItem}>
          <label>Address</label>
          <input type="text" placeholder="Address" />
        </div>

        <div className={css.newuserItem}>
          <label>Gender</label>

          <div className={css.newuserGender}>
            <input type="radio" name="gender" id="male" value="male" />
            <label>Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label>Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label>Other</label>
          </div>
        </div>

        <div className={css.newuserItem}>
          <button>Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
