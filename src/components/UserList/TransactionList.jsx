import React from "react";
import css from "./UserList.module.css";
import { userData } from "../../data/data";

const TransactionList = () => {
  return (
    <div className={`${css.transactionList} themeContainer`}>
      <span className={css.title}>Latest Transactions</span>

      <div>
        {userData.slice(0, 4).map((user, index) => {
          return (
            <div className={css.transactionprofilelist} key={index}>
              <img src={user.name.image} />
              <span>
                {user.name.firstName} {user.name.lastName}
              </span>
              <span>{user.date}</span>
              <span>${user.profit}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionList;
