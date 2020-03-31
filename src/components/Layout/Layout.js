import React from "react";
import Aux from "../../hoc/outline";
import classes from "./Layout.css";
const layout = props => (
  <Aux>
    <div>toolbar, slidedrawer</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
