import React from "react";
import DoItem from "./DoItem";

function DoList({ items, onDelete, onCheck, onEdit }) {
  return (
    <div id="tasks">
      {items.map((item) => (
        <DoItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onCheck={onCheck}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default DoList;
