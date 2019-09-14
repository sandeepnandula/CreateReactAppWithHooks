/**
 * Passing the context value to the child component
 */
import React, { useContext } from "react";
import { userContext } from "../index";

// Note: useContext method will work if we use it inside the function
function HooksButton() {
  const user = useContext(userContext);
  return (
    <div>
      <p>{user}</p>
    </div>
  );
}
export default HooksButton;
