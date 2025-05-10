import React from "react";
import css from "./UserList.module.css";
import { NewUsers } from "../../data/data";

const NewUserList = () => {
  return (
    <div className={`${css.newUserCards} themeContainer`}>
      <span className={css.title}>New Join Members</span>

      <div className={css.profilecards}>
        {NewUsers.map((card, index) => {
          return (
            <ul style={{ listStyle: "none" }} key={index}>
              <li className={css.profilecardlist} >
                <img src={card.img} alt="New Members Profile" />
                <div className={css.profilecardname}>
                  <span>{card.name}</span>
                  <span>{card.profession}</span>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default NewUserList;
