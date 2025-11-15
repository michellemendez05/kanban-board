import { useState } from 'react'
import './styles.css'; // Importing styles

export default function App() {

  const [items, setItems] = useState(["Soup", "Chicken", "Eggs"]);
  const add = () => {
    setItems([...items, items.length + 1]);
  };
  const remove = () => {
    if (items.length > 0) {
      setItems(items.slice(0, -1));
    }
  };
  return (
    
   <div>
        <div class="h1">
    <h1>Michelle</h1>
  </div>

  <div class="subheading">
    <h1>What I want to do this week:</h1>
  </div>

  <ul>
    <li>Go to the gym</li>
    <li>Study for exam</li>
    <li>Watch a movie</li>
  </ul>

  <div class="subheading">
    <h1>Day layout:</h1>
  </div>

  <ol>
    <li>Morning: Study for exam</li>
    <li>Afternoon: Go to the gym</li>
    <li>Evening: Watch a movie</li>
  </ol>

  <div class="grocery-list">
    <div class="subheading">
      <h2>Grocery List:</h2>
    </div>

    <ul id="groceryList">

      {items.map((num) =>  (
        <li key={num}>{num}</li>
      ))}

      {/* <li>Soup</li>
      <li>Chicken</li>
      <li>Eggs</li> */}
    </ul>

    <p>
    <button onClick={add}>Add item</button>
    <button onClick={remove}>Remove item</button>
    </p>  
  </div>
      </div>
  );
}
