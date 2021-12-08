import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  })

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const updatedFoods = [...foods, newFood]
    setFoods(updatedFoods)
  }

  function handleLiClick(id) {
    // const updatedFood = foods.filter((food) => food.id !== id)
    // setFoods(updatedFood)

    const updateHeat = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1
        }
      } 
      else {
        return food
      }
    }) 
    setFoods(updateHeat)
  }

  const foodList = foodsToDisplay.map((food) => (
    <li onClick={() => handleLiClick(food.id)} key={food.id}>
      {food.name} | Cuisine: {food.cuisine} | Heat: {food.heatLevel}
    </li>
  ))

  function handleFilterChange(event) {
    setFilterBy(event.target.value)
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
