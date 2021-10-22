import React, { useState } from "react";
import { data } from "../data";

const Cart = () => {
  const [count, setcount] = useState(1);
  const [foods, setFood] = useState(data);

  const removeFood = (id) => {
    let newFood = foods.filter((food) => food.id !== id);
    setFood(newFood);
  };

  return (
    <div className="items">
      <p style={{ margin: "1.5em 0" }}>
        {foods.length === 0
          ? "You have empty food cart"
          : `${"You have"}  ${foods.length}  ${"orders"}`}
      </p>
      {foods.map((foodData) => {
        const { id, food, size } = foodData;
        return (
          <div key={id} className="item">
            <div className="flex food">
              <p>{food}</p>|<p>{size}</p>
            </div>
            <div className="flex count">
              <button
                key={id}
                onClick={() => {
                  setcount(count + 1);
                }}
                className="increment-decrement"
              >
                <i className="fas fa-plus"></i>
              </button>
              <span className="count">{count}</span>
              <button
                className="increment-decrement"
                onClick={() => setcount(count - 1)}
              >
                <i className="fas fa-minus"></i>
              </button>
            </div>
            <div>
              <i
                onClick={() => {
                  removeFood(id);
                }}
                className="fas fa-times"
              ></i>
            </div>
          </div>
        );
      })}
      <button
        className="remove-all"
        onClick={() => {
          setFood([]);
        }}
      >
        Remove All
      </button>
    </div>
  );
};

export default Cart;
