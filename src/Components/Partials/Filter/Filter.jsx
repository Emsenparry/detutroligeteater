import React from "react";

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
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
    </div>
  );
};

export default Filter;
