// src/components/FilterGroup/FilterGroup.js

import React, { useState, useCallback } from 'react';
import './FilterGroup.css';

const FilterGroup = ({ title, inputType, options, onFilterChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const updateSelectedOptions = useCallback((optionValue, isChecked) => {
    if (isChecked) {
      setSelectedOptions([...selectedOptions, optionValue]);
    } else {
      setSelectedOptions(selectedOptions.filter((value) => value !== optionValue));
    }
  }, [selectedOptions]); 

  const handleInputChange = (event) => {
    const optionValue = event.target.value;
    updateSelectedOptions(optionValue, event.target.checked); // Chamando a função aqui
    onFilterChange(selectedOptions);
  };

  return (
    <div className="filter-group">
      <h4>{title}</h4>
      <div className="filter-options">
        {options.map((option, index) => (
          <div key={index} className="filter-option">
            <input
              type={inputType}
              id={`option-${index}`}
              name="filter-group"
              value={option.value || option.text}
              onChange={handleInputChange}
            />
            <label htmlFor={`option-${index}`}>{option.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;