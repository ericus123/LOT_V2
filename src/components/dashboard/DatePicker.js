import { useState } from "react";
import ReactDatePicker from "react-datepicker";


const DatePickerComponent = () => {
  const [date, setDate] = useState(new Date());

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  return (
    <ReactDatePicker
     className="date-picker"
      selected={date}
      onChange={(date) => setDate(date)}
      onCalendarClose={handleCalendarClose}
      onCalendarOpen={handleCalendarOpen}
      dateFormat="MMMM d"
    />
  );
};

export default DatePickerComponent;