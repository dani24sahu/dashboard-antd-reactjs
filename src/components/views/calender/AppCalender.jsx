import React from "react";
import { Calendar } from "antd";
import moment from "moment";
import './AppCalender.css';

const AppCalendar = () => {
  const isWeekend = (date) => {
    const day = date.day();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  };

  const isPastDate = (date) => {
    const today = moment();
    return date.isBefore(today, "day");
  };

  const dateFullCellRender = (date) => {
    if (!date.isSame(moment(), 'month')) {
      // Return null for cells that are not in the current month
      return null;
    }
  
    let classNames = 'custom-date-cell';
  
    if (date.day() === 0 || date.day() === 6) {
      // Saturday and Sunday should be gray
      classNames += ' weekend';
    } else if (isPastDate(date)) {
      // Past dates (Mon-Fri) should be light green
      classNames += ' past-date';
    } else if (date.isSame(moment(), 'day')) {
      // Present date (Mon-Fri) should be green
      classNames += ' current-date';
    }
  
    return <div className={classNames}>{date.date()}</div>;
  };
  

  const monthCellRender = (value) => {
    return <div className="custom-month-cell">{value.format("MMMM")}</div>;
  };

  return (
    <Calendar
      dateCellRender={dateFullCellRender}
      monthCellRender={monthCellRender}
    />
  );
};

export default AppCalendar;
