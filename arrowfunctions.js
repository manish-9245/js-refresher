hello = function () {
  return 'Hello World!';
};

hi = () => {
  return 'Hello World!';
};

console.log (hello ());
console.log (hi ());

import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateRangePicker.css'; // Import custom CSS for styling

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const endRef = useRef(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setEndDate(null);
    endRef.current.setFocus(); // Move focus to end date input
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const isDayDisabled = (date) => {
    return date < today;
  };

  const highlightDates = (date) => {
    if (startDate && endDate) {
      return date >= startDate && date <= endDate;
    }
    return false;
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
          maxDate={endDate || today}
          filterDate={isDayDisabled}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          placeholderText="Select start date"
          highlightDates={highlightDates}
        />
      </div>
      <div>
        <label>End Date:</label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          dateFormat="MMMM d, yyyy"
          minDate={startDate || today}
          maxDate={today}
          filterDate={isDayDisabled}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          placeholderText="Select end date"
          ref={endRef}
          highlightDates={highlightDates}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;