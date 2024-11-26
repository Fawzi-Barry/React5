import React, { useState } from "react";

function AddItemForm({ addItem }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addItem(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 15px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add Item
      </button>
    </form>
  );
}

export default AddItemForm;
