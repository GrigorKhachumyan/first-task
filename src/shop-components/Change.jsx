import React from "react";
import "../shop.css";

export default function Change(props) {
  return (
    <div className="Change-body">
      {props.state.inputValue >= props.state.itemValue && (
        <div>
          <div>
            Your change : {props.state.inputValue - props.state.itemValue}
          </div>
          <div className="change1">
            {props.changeArr.map((item, index) => {
              return (
                <div key={index} className="change2">
                  {item[0] !== 0 && (
                    <div className="change3 item50000">{item[0]}</div>
                  )}
                  {item[1] !== 0 && (
                    <div className="change3 item20000">{item[1]}</div>
                  )}
                  {item[2] !== 0 && (
                    <div className="change3 item10000">{item[2]}</div>
                  )}
                  {item[3] !== 0 && (
                    <div className="change3 item5000">{item[3]}</div>
                  )}
                  {item[4] !== 0 && (
                    <div className="change3 item2000">{item[4]}</div>
                  )}
                  {item[5] !== 0 && (
                    <div className="change3 item1000">{item[5]}</div>
                  )}
                  {item[6] !== 0 && (
                    <div className="change3 item500">{item[6]}</div>
                  )}
                  {item[7] !== 0 && (
                    <div className="change3 item200">{item[7]}</div>
                  )}
                  {item[8] !== 0 && (
                    <div className="change3 item100">{item[8]}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {props.state.inputValue < props.state.itemValue && (
        <div>You have not enough money</div>
      )}
    </div>
  );
}
