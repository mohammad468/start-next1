import React from "react";
import { Button } from "react-bootstrap";

import { increase } from "../../redux/counter/CounterAction";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-center flex-column">
      <h1>Counter - {state.counter}</h1>
      <Button onClick={() => dispatch(increase())}>Increase</Button>
    </div>
  );
}
