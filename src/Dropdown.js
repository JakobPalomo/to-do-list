// Dropdown.js

import React from "react";

function Dropdown({ handleSortChange, handleClearTasks }) {
  return (
    <div>
      <select onChange={handleSortChange} style={{ marginRight: 8 }}>
        <option value="">By Input</option>
        <option value="alphabetical">By Alphabetical</option>
        <option value="checked">Completed Status</option>
        <option value="unchecked">Incompleted Statues</option>
        <option value="completed">All Complete</option>
        <option value="uncompleted">All Incomplete</option>
        <option value="quantity">By Quantity</option>
      </select>
      <button onClick={handleClearTasks} className="clear">
        Clear All Tasks
      </button>
    </div>
  );
}

export default Dropdown;
