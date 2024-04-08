import React, { useState } from "react";

function Search({ onAddItems }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const newItem = { name, quantity, isChecked: false, id: Date.now() };
    onAddItems(newItem);
    setName("");
    setQuantity(1);
    setItems([...items, newItem]);
  }

  const amounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div>
      <div id="newtask">
        <form onSubmit={handleSubmit}>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            style={{ marginRight: "1%" }}
          >
            {amounts.map((amount) => (
              <option key={amount} value={amount}>
                {amount}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Add Item"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default Search;
