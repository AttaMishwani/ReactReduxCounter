import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/counter";
import { privacyAction } from "../store/privacy";

export default function Controls() {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterAction.increment());
  };

  const handleDecrement = () => {
    dispatch(counterAction.decrement());
  };

  const handleAdd = () => {
    dispatch(
      counterAction.add({
        num: inputElement.current.value,
      })
    );
    //dispatch(counterAction.add(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(
      counterAction.subtract({
        num: inputElement.current.value,
      })
    );
    inputElement.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch(privacyAction.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          onClick={handleIncrement}
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
        >
          Inrement
        </button>
        <button
          onClick={handleDecrement}
          type="button"
          className="btn btn-danger btn-lg px-4"
        >
          Decrement
        </button>
        <button
          onClick={handlePrivacy}
          type="button"
          className="btn btn-danger btn-lg px-4"
        >
          Privacy
        </button>
      </div>

      {/* advance options */}
      <div className="d-grid gap-2 my-5 d-sm-flex justify-content-sm-center">
        <input
          type="text"
          ref={inputElement}
          placeholder="Enter Number"
          className="form-control"
        />
        <button
          type="button"
          onClick={handleAdd}
          className="btn  btn-primary btn-lg px-4"
        >
          Add
        </button>

        <button
          type="button"
          onClick={handleSubtract}
          className="btn btn-danger btn-lg px-4"
        >
          Subtract
        </button>
      </div>
    </>
  );
}
