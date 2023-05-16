# JavaScript Refresher
This is a good repo to find most of the basics of JS
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setEndDate(null);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const isDayDisabled = (date) => {
    return date < today;
  };

  return (
    <div>
      <h1>Date Range Picker</h1>
      <div>
        <label>Start Date:</label>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          dateFormat="MMMM d, yyyy"
          minDate={today}
          maxDate={endDate}
          filterDate={isDayDisabled}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          placeholderText="Select start date"
        />
      </div>
      <div>
        <label>End Date:</label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          dateFormat="MMMM d, yyyy"
          minDate={startDate}
          maxDate={today}
          filterDate={isDayDisabled}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          placeholderText="Select end date"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;