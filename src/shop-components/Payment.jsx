import React from "react";
import "../shop.css";

export default function Payment(props) {
  return (
    <div className="Payment-body">
      <div className="clicked-item-view">
        {props.state.itemName}:{props.state.itemValue}
      </div>
      <input
        value={props.state.inputValue}
        placeholder="money"
        className="input-payment"
        onChange={(e) => {
          props.setInputValue(e);
        }}
      ></input>
      <button onClick={props.clickPay} className="button-payment">
        PAY
      </button>
    </div>
  );
}
