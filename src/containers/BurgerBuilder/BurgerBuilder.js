import React, { Component } from "react";
import Aux from "../../hoc/outline";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.5,
  bacon: 1,
  meat: 1.5,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 2,
    purchasable: false,
    purchasing: false,
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const newCount = this.state.ingredients[type] + 1;
    const updateIngredient = {
      ...this.state.ingredients,
    };
    updateIngredient[type] = newCount;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    this.setState({ ingredients: updateIngredient, totalPrice: newPrice });
    this.updatePurchaseState(updateIngredient);
  };

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] <= 0) return;
    const newCount = this.state.ingredients[type] - 1;
    const updateIngredient = {
      ...this.state.ingredients,
    };
    updateIngredient[type] = newCount;
    const newPirce = this.state.totalPrice - INGREDIENT_PRICE[type];
    this.setState({ ingredients: updateIngredient, totalPrice: newPirce });
    this.updatePurchaseState(updateIngredient);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("You can continue !");
  };
  // add methods;
  render() {
    const disableInfo = {
      ...this.state.ingredients,
    };

    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary ingredients={this.state.ingredients} 
          purchaseCancelled = {this.purchaseCancelHandler}
          purchaseContinued = {this.purchaseContinueHandler} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdd={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disableInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
