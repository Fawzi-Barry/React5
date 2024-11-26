import React from "react";

function Item({ item, removeItem }) {
  return (
    <li style={{ margin: "10px 0" }}>
      {item}
      <button
        style={{
          marginLeft: "10px",
          padding: "5px 10px",
          backgroundColor: "#ff4d4d",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => removeItem(item)}
      >
        Delete
      </button>
    </li>
  );
}

export default Item;
