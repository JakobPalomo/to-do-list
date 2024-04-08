import React, { useState } from "react";

function DoItem({ item, onDelete, onCheck, onEdit }) {
  const [isChecked, setIsChecked] = useState(item.isChecked);
  const [isEditing, setIsEditing] = useState(false);
  const [itemName, setItemName] = useState(item.name);
  const [itemQuantity, setItemQuantity] = useState(item.quantity);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    onCheck(item.id);
  };

  const handleDelete = () => {
    onDelete(item.id);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleEdit = () => {
    // Save edited item
    onEdit(item.id, itemName, itemQuantity);
    toggleEdit();
  };

  return (
    <div className="task">
      {!isEditing ? (
        <span
          id="taskname"
          className={isChecked ? "checked words" : "words"}
          style={{
            textDecoration: isChecked ? "line-through" : "none",
            opacity: isChecked ? 0.3 : 1,
          }}
        >
          x{itemQuantity} {itemName}
        </span>
      ) : (
        <div>
          <input
            className="input"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <input
            className="input"
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(parseInt(e.target.value))}
            style={{ width: 38 }}
          />
        </div>
      )}
      <div
        style={{
          height: 30,
          flexDirection: "row",
          width: "138px",
          alignItems: "end",
        }}
      >
        {!isEditing ? (
          <>
            <button
              className="edit"
              style={{ marginRight: 8 }}
              onClick={toggleEdit}
            >
              <i className="fa fa-pencil-square-o"></i>
            </button>
            <button
              className="delete"
              style={{ marginRight: 8 }}
              onClick={handleDelete}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
            <button className="delete" onClick={handleCheck}>
              <i className="fa-solid fa-check"></i>
            </button>
          </>
        ) : (
          <>
            <button
              className="save"
              onClick={handleEdit}
              style={{ marginRight: 2, fontSize: 10 }}
            >
              Save
            </button>
            <button
              className="cancel"
              onClick={toggleEdit}
              style={{ marginRight: 2, fontSize: 10 }}
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default DoItem;
