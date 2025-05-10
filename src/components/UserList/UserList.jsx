import React from "react";
import NewUserList from "./NewUserList";
import css from "./UserList.module.css";
import TransactionList from "./TransactionList";

const UserList = () => {
  return (
    <div className={css.container}>
      <NewUserList />
      <TransactionList />
    </div>
  );
};

export default UserList;
