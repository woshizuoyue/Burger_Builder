import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread_top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread_bottom" />
    </div>
  );
};

export default Burger;
