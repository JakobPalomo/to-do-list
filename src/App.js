import React, { useState } from "react";
import "./App.css";
import DoList from "./DoList";
import Head from "./Head";
import Search from "./Search";
import Dropdown from "./Dropdown";

function App() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("");

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(itemId) {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (isConfirmed) {
      setItems((items) => items.filter((item) => item.id !== itemId));
    }
  }

  function handleClearTasks() {
    setItems([]);
  }

  function handleSortChange(event) {
    const filterBy = event.target.value;
    setSortBy(filterBy);
  }

  function handleCheck(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }

  function calculatePercentage() {
    if (items.length === 0) return 0;
    const checkedItemsCount = items.filter((item) => item.isChecked).length;
    return ((checkedItemsCount / items.length) * 100).toFixed(2);
  }

  function handleEditItem(itemId, newName) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, name: newName } : item
      )
    );
  }

  function sortTasks() {
    if (sortBy === "alphabetical") {
      return [...items].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "checked") {
      return items
        .filter((item) => item.isChecked)
        .concat(items.filter((item) => !item.isChecked));
    } else if (sortBy === "unchecked") {
      return items
        .filter((item) => !item.isChecked)
        .concat(items.filter((item) => item.isChecked));
    } else if (sortBy === "completed") {
      return items.filter((item) => item.isChecked);
    } else if (sortBy === "uncompleted") {
      return items.filter((item) => !item.isChecked);
    } else if (sortBy === "quantity") {
      return [...items].sort((a, b) => a.quantity - b.quantity);
    } else {
      return items;
    }
  }

  return (
    <div>
      <div className="container">
        <Head />
        <Search onAddItems={handleAddItems} />
        <center>
          <h4>Percentage of Tasks Completed: {calculatePercentage()}%</h4>
        </center>
        <DoList
          items={sortTasks()}
          onDelete={handleDeleteItem}
          onCheck={handleCheck}
          onEdit={handleEditItem}
        />
        <center>
          <Dropdown
            handleSortChange={handleSortChange}
            handleClearTasks={handleClearTasks}
          />
        </center>
        <br></br>
      </div>
    </div>
  );
}

export default App;
