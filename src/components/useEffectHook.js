/**
 * OVERVIEW
 * - CONDITIONAL REDERNING
 * - USE ONLY ONCE (COMPONENTDIDMOUNT)
 * - WITH CLEANUP (COMPONENTWILLUNMOUNT)
 */

/**
 * useEffect hook is a close replacement of
 * componentdidUpdate, DidMount, WillUnmount
 *
 * MEMO or CONDITIONALLY run the effects
 * useEffect(() => {
 * Note: If the value 1 changes only the useEffect will run
 * }, [<value1>])
 *
 * * useEffect(() => {
 * Note: If both value 1 & 2 changes only the useEffect will run
 * }, [<value1, value 2>])
 *
 * componentWillUnMount
 * useEffect(() => {
 * *** componentDidUpdate or DidMount code***
 * return () => {
 * *** componentWillMount code ***
 * }
 * })
 *
 */
import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    console.log(`You clicked the button ${count} times`);
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(prevState => prevState + 1)}>
        Count {count}{" "}
      </button>
    </div>
  );
}

export default HooksButton;

/**
 *  * - USE ONLY ONCE (COMPONENTDIDMOUNT)
 * To achive only once to use the useEffect
 * The console log only print once it wont update after clicking
 * This can be used in the adding event listeners
 *   useEffect(() => {
    console.log(`You clicked the button ${count} times`);
  }, []); // empty array []
 */

/**
 *  * - MIMIC THE (COMPONENTWILLUNMOUNT)
 * To achive only once to use the useEffect
 * The console log only print once it wont update after clicking
 * This can be used in the adding event listeners
 *   useEffect(() => {
    return () => {
      console.log(`component is unmounted`);
    }
  }, []); // empty array []
 */
