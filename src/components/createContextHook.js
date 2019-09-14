/**
 * Passing the context value to the child component
 */
import React from "react";
import { userContext } from "../index";

function HooksButton() {
  return (
    <div>
      <userContext.Consumer>{user => <p>{user}</p>}</userContext.Consumer>
    </div>
  );
}
export default HooksButton;
