import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState(""); //controlled elements
  const [quantity, setquantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault(); //prevents the reloading of the page on clicking submit button
    //console.log(e);
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);
    setDescription("");
    setquantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 📋</h3>
      <select
        value={quantity}
        onChange={(n) => setquantity(Number(n.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)} //value handled by react now
      />
      <button>Add</button>
    </form>
  );
}
