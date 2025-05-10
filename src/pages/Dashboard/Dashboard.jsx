import React from "react";
import css from "./Dashboard.module.css";
import { cardsData } from "../../data/data";
import Statistics from "../../components/Staticstics/Statistics";

const Dashboard = () => {
  return (
    <div className={css.container}>
      <div className={`${css.dashboardHead} themeContainer`}>
        <div className={css.head}>
          <span>Dashboard</span>

          <div className={css.durationButton}>
            <select>
              <option value="">1 Week</option>
              <option value="">1 Month</option>
              <option value="">1 Year</option>
            </select>
          </div>
        </div>
        <div className={css.cards}>
          {cardsData.map((card, index) => {
            return (
              <div className={css.card} key={index}>
                <div className={css.cardHead}>
                  <span>{card.title}</span>
                  <span>+{card.change}</span>
                </div>

                <div className={css.Amount}>
                  <span>$</span>
                  <span>{card.amount}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Statistics />
    </div>
  );
};

export default Dashboard;
