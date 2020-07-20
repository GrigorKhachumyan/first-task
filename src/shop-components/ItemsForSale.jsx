import React from "react";
import "../shop.css";

export default function ItemsForSale(props) {
  return (
    <div className="ItemForSale-body">
      <div className="sale-item-body">
        <div
          className="sale-item sale-item-1"
          onClick={() => {
            props.setItemValue(1);
          }}
        ></div>
        <div>Coca-cola 300</div>
      </div>
      <div className="sale-item-body">
        <div
          className="sale-item sale-item-2"
          onClick={() => {
            props.setItemValue(2);
          }}
        ></div>
        <div>Tent 7.000</div>
      </div>
      <div className="sale-item-body">
        <div
          className="sale-item sale-item-3"
          onClick={() => {
            props.setItemValue(3);
          }}
        ></div>
        <div>Тraining apparat 18.000</div>
      </div>
    </div>
  );
}
