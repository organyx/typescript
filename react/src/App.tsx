import React, { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import Greeter from "./components/Greeter";
import ShoppingListForm from "./components/ShoppingListForm";
import Item from "./models/item";
import { v4 as getId } from "uuid";
import "./App.css";

function App() {
  const initialItems: Item[] = [
    { id: getId(), product: "Apples", quantity: 2 },
    { id: getId(), product: "Bananas", quantity: 3 },
  ]
  const [items, setItems] = useState<Item[]>(initialItems);
  const addItem = (product: string, quantity: number) => {
    console.log("MADE TO THE APP COMPONENT!");
    setItems([...items, { id: getId(), product, quantity }]);
  };
  return (
    <div>
      <Greeter person="Bingo" />
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
