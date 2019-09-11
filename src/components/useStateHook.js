import React, { useState } from "react";
function HooksButton() {
  // count : the value
  // setCount : this.setState()
  /**
   * A state value can be a
   * @string
   * @object
   * @bool
   * @array
   */
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(prevState => prevState + 1)}>
        Count {count}{" "}
      </button>
    </div>
  );
}
export default HooksButton;
