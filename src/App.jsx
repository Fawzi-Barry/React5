import React, { useState } from "react";
import ItemList from "./ItemList";
import AddItemForm from "./AddItemForm";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (itemToRemove) => {
    setItems(items.filter((item) => item !== itemToRemove));
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Dynamic List App</h1>
      <AddItemForm addItem={addItem} />
      <ItemList items={items} removeItem={removeItem} />
    </div>
  );
}

export default App;
