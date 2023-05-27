import React, { useState } from "react";
import { DateRangePicker } from "rsuite";
import "../styles/formcalendar.css";

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
      <DateRangePicker showOneCalendar value={dateRange} onChange={handleDateChange} />
      <div className="grid-input-button">
        <button
          type="submit"
          className="button_banner"
          onClick={handleSubmit}
          disabled={dateRange.length === 0}
          style={{
            width: "358px",
            height: "36px",
            left: "861px",
            top: "794px",
            background: dateRange.length === 0 ? "#D0D0D0" : "#5CB85F",
            borderRadius: "2px",
          }}
        >
          <span
            style={{
              fontFamily: "Arial",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#FFFFFF",
            }}
          >
            Lanjutkan Pembayaran
          </span>
        </button>
      </div>
    </>
  );
};

export default FormCalendar;
