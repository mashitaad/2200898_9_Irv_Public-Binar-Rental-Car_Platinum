import React, { useState } from "react";
import { DateRangePicker } from "rsuite";
import '../styles/formcalendar.css'

const FormCalendar = (props) => {
  const [dateRange, setDateRange] = useState([]); 
  const handleDateChange = (value) => {
    setDateRange(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    props.onSubmit(dateRange);
  };

  return (
    <>

<DateRangePicker
        showOneCalendar
        value={dateRange}
        onChange={handleDateChange}
      />
      <div className="grid-input-button">
        <button type="submit" className="button_banner" onClick={handleSubmit}>
          Submit
        </button>
      </div>
  </>
  );
};

export default FormCalendar;

