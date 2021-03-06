import React from "react";
import Moment from "react-moment";
const getDiffInYears = (date1, date2) => {
  const diffInMs = Math.abs(date2 - date1);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  return diffInDays / 365;
};
export default function XpMoment({ date }) {
  const todayDate = new Date();
  let text = "";
  if (getDiffInYears(date, todayDate) < 2) {
    text = "";
  }

  return (
    <div>
      {text === "" ? (
        text
      ) : (
        <Moment unit="months" fromNow ago>
          {date}
        </Moment>
      )}
    </div>
  );
}
