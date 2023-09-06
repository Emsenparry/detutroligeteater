import React from "react";
import './Filter.scss';


const Filter = ({ sortingOrder, onSortingOrderChange }) => {
  const handleSortChange = (e) => {
    const newSortingOrder = e.target.value;
    onSortingOrderChange(newSortingOrder);
  };

  return (
    <div>
      <select
        id="sortingOrder"
        value={sortingOrder}
        onChange={handleSortChange}
      >
        <option value="" hidden>
          Filter
        </option>
        <option value="ASC">Sorter efter titel (faldende)</option>
        <option value="DESC">Sorter efter titel (stigende)</option>
      </select>
    </div>
  );
};

export default Filter;
