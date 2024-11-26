import React from "react";
import Item from "./Item";

function ItemList({ items, removeItem }) {
  return (
    <div>
      <h2>Item List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, index) => (
          <Item key={index} item={item} removeItem={removeItem} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
