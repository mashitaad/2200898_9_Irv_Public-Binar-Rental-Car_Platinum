/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { DateRangePicker } from 'rsuite';
import '../styles/formcalendar.css';

const FormCalendar = (props) => {
  const [dateRange, setDateRange] = useState([]);
  const handleDateChange = (value) => {
    setDateRange(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dateRange) {
      props.onSubmit([]);
    } else {
      props.onSubmit(dateRange);
    }
  };

  return (
    <>
      <DateRangePicker showOneCalendar value={dateRange} onChange={handleDateChange} />
      <div className="button-car-payment">
        <button type="submit" className="button-car-detail" onClick={handleSubmit}>
          <span>Lanjutkan Pembayaran</span>
        </button>
      </div>
    </>
  );
};

export default FormCalendar;
