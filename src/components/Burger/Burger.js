import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread_top" />
      {transformedIngredients}
      <BurgerIngredient type="bread_bottom" />
    </div>
  );
};

export default Burger;
