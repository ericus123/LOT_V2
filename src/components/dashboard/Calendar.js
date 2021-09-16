import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.scss";

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
      className="calendar-comp"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};


export default CalendarComponent;