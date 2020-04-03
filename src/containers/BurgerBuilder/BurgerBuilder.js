import React, { Component } from "react";
import Aux from "../../hoc/outline";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Build Controller</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
