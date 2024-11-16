"use client";

import React from "react";

const Dropdown = ({ options, onChange, defaultText }) => {
  return (
    <select onChange={onChange} className="dropdown">
      <option value="">{defaultText}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value || index}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
