import React from "react";
import css from "./Statistics.module.css";
import { GoArrowUp } from "react-icons/go";
import StatisticsChart from "../StatisticsChart/StatisticsChart";
import UserList from "../UserList/UserList";

const Statistics = () => {
  return (
    <>
      <div className={`${css.statcontainer} themeContainer `}>
        <span className={css.title}>Overview Statistics</span>

        <div className={`${css.cards} grey-container`}>
          <div>
            <div className={css.arrowIcon}>
              <GoArrowUp />
            </div>

            <div className={css.card}>
              <span>Top item this month</span>
              <span>Office comps</span>
            </div>
          </div>

          <div className={css.card}>
            <span>Items</span>
            <span>455</span>
          </div>

          <div className={css.card}>
            <span>Profit</span>
            <span>$ 370,000</span>
          </div>

          <div className={css.card}>
            <span>Daily Average</span>
            <span>$ 2,000</span>
          </div>
        </div>

        <StatisticsChart />
      </div>
      <UserList />
    </>
  );
};

export default Statistics;
