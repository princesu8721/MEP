import React from 'react';
import './YearNavigation.css';

const YearNavigation = ({ years, selectedYear, onYearClick }) => {
    return (
<div className="year-navigation">
{years.map((year) => (
    <button
        key={year}
        className={`year-button ${selectedYear === year ? 'active' : ''}`}
        onClick={() => onYearClick(year)}
    >
        {year}
    </button>
))}
</div>
    );
};

export default YearNavigation;
