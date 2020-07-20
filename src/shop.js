import React, { useState } from "react";
import "./shop.css";
import ItemsForSale from "./shop-components/ItemsForSale";
import Payment from "./shop-components/Payment";
import Change from "./shop-components/Change";

export default function Shop() {
  const [state, setState] = useState({
    itemValue: 0,
    itemName: "",
    inputValue: 0,
  });
  const [changeArr, setChangeArr] = useState([]);
  const clickPay = () => {
    let moneyArrObj = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let changeArrObj = [];
    let change = state.inputValue - state.itemValue;
    if (change >= 0) {
      let moneySize;
      for (let i = 0; i < 9; i++) {
        switch (i) {
          case 0:
            moneySize = 50000;
            break;
          case 1:
            moneySize = 20000;
            break;
          case 2:
            moneySize = 10000;
            break;
          case 3:
            moneySize = 5000;
            break;
          case 4:
            moneySize = 2000;
            break;
          case 5:
            moneySize = 1000;
            break;
          case 6:
            moneySize = 500;
            break;
          case 7:
            moneySize = 200;
            break;
          case 8:
            moneySize = 100;
            break;
          default:
            alert("case is not found");
        }
        while (change >= moneySize) {
          change = change - moneySize;
          moneyArrObj[i]++;
        }
      }
      changeArrObj.push(moneyArrObj);

      if (moneyArrObj[7] === 1) {
        let moneyArrObjX = [...moneyArrObj];
        moneyArrObjX[7] = 0;
        moneyArrObjX[8] = moneyArrObjX[8] + 2;
        changeArrObj.push(moneyArrObjX);
      }
      if (moneyArrObj[7] === 2) {
        let moneyArrObjX = [...moneyArrObj];
        moneyArrObjX[7] = 1;
        moneyArrObjX[8] = moneyArrObjX[8] + 2;
        changeArrObj.push(moneyArrObjX);
        let moneyArrObjX2 = [...moneyArrObjX];
        moneyArrObjX2[7] = 0;
        moneyArrObjX2[8] = moneyArrObjX2[8] + 2;
        changeArrObj.push(moneyArrObjX2);
      }
      if (moneyArrObj[6] === 1) {
        let moneyArrObjX = [...moneyArrObj];
        moneyArrObjX[6] = 0;
        moneyArrObjX[7] = moneyArrObjX[7] + 2;
        moneyArrObjX[8] = moneyArrObjX[8] + 1;
        changeArrObj.push(moneyArrObjX);
        if (moneyArrObjX[7] === 3) {
          let moneyArrObjX2 = [...moneyArrObjX];
          moneyArrObjX2[7] = 2;
          moneyArrObjX2[8] = moneyArrObjX2[8] + 2;
          changeArrObj.push(moneyArrObjX2);
          let moneyArrObjX3 = [...moneyArrObjX2];
          moneyArrObjX3[7] = 1;
          moneyArrObjX3[8] = moneyArrObjX3[8] + 2;
          changeArrObj.push(moneyArrObjX3);
          let moneyArrObjX4 = [...moneyArrObjX3];
          moneyArrObjX4[7] = 0;
          moneyArrObjX4[8] = moneyArrObjX4[8] + 2;
          changeArrObj.push(moneyArrObjX4);
        } else {
          let moneyArrObjX1 = [...moneyArrObjX];
          moneyArrObjX1[7] = 1;
          moneyArrObjX1[8] = moneyArrObjX1[8] + 2;
          changeArrObj.push(moneyArrObjX1);
          let moneyArrObjX2 = [...moneyArrObjX1];
          moneyArrObjX2[7] = 0;
          moneyArrObjX2[8] = moneyArrObjX2[8] + 2;
          changeArrObj.push(moneyArrObjX2);
        }
      }
      if (moneyArrObj[5] === 1) {
        let moneyArrObjXX = [...moneyArrObj];
        moneyArrObjXX[5] = 0;
        moneyArrObjXX[6] = moneyArrObjXX[6] + 2;
        changeArrObj.push(moneyArrObjXX);
        if (moneyArrObjXX[6] === 3) {
          let moneyArrObjX1 = [...moneyArrObjXX];
          moneyArrObjX1[6] = 2;
          moneyArrObjX1[7] = moneyArrObjX1[7] + 2;
          moneyArrObjX1[8] = moneyArrObjX1[8] + 1;
          changeArrObj.push(moneyArrObjX1);
          if (moneyArrObjX1[7] === 3) {
            let moneyArrObjX2 = [...moneyArrObjX1];
            moneyArrObjX2[7] = 2;
            moneyArrObjX2[8] = moneyArrObjX2[8] + 2;
            changeArrObj.push(moneyArrObjX2);
            let moneyArrObjX3 = [...moneyArrObjX2];
            moneyArrObjX3[7] = 1;
            moneyArrObjX3[8] = moneyArrObjX3[8] + 2;
            changeArrObj.push(moneyArrObjX3);
            let moneyArrObjX4 = [...moneyArrObjX3];
            moneyArrObjX4[7] = 0;
            moneyArrObjX4[8] = moneyArrObjX4[8] + 2;
            changeArrObj.push(moneyArrObjX4);
            moneyArrObjX1 = [...moneyArrObjX4];
          } else {
            let moneyArrObjX3 = [...moneyArrObjX1];
            moneyArrObjX3[7] = 1;
            moneyArrObjX3[8] = moneyArrObjX3[8] + 2;
            changeArrObj.push(moneyArrObjX3);
            let moneyArrObjX4 = [...moneyArrObjX3];
            moneyArrObjX4[7] = 0;
            moneyArrObjX4[8] = moneyArrObjX4[8] + 2;
            changeArrObj.push(moneyArrObjX4);
            moneyArrObjX1 = [...moneyArrObjX4];
          }
          moneyArrObjX1[6] = 1;
          moneyArrObjX1[7] = moneyArrObjX1[7] + 2;
          moneyArrObjX1[8] = moneyArrObjX1[8] + 1;
          changeArrObj.push(moneyArrObjX1);
          if (moneyArrObjX1[7] === 3) {
            let moneyArrObjX2 = [...moneyArrObjX1];
            moneyArrObjX2[7] = 2;
            moneyArrObjX2[8] = moneyArrObjX2[8] + 2;
            changeArrObj.push(moneyArrObjX2);
            let moneyArrObjX3 = [...moneyArrObjX2];
            moneyArrObjX3[7] = 1;
            moneyArrObjX3[8] = moneyArrObjX3[8] + 2;
            changeArrObj.push(moneyArrObjX3);
            let moneyArrObjX4 = [...moneyArrObjX3];
            moneyArrObjX4[7] = 0;
            moneyArrObjX4[8] = moneyArrObjX4[8] + 2;
            changeArrObj.push(moneyArrObjX4);
            moneyArrObjX1 = [...moneyArrObjX4];
          } else {
            let moneyArrObjX3 = [...moneyArrObjX1];
            moneyArrObjX3[7] = 1;
            moneyArrObjX3[8] = moneyArrObjX3[8] + 2;
            changeArrObj.push(moneyArrObjX3);
            let moneyArrObjX4 = [...moneyArrObjX3];
            moneyArrObjX4[7] = 0;
            moneyArrObjX4[8] = moneyArrObjX4[8] + 2;
            changeArrObj.push(moneyArrObjX4);
            moneyArrObjX1 = [...moneyArrObjX4];
          }
          moneyArrObjX1[6] = 0;
          moneyArrObjX1[7] = moneyArrObjX1[7] + 2;
          moneyArrObjX1[8] = moneyArrObjX1[8] + 1;
          changeArrObj.push(moneyArrObjX1);
          if (moneyArrObjX1[7] === 3) {
            let moneyArrObjX2 = [...moneyArrObjX1];
            moneyArrObjX2[7] = 2;
            moneyArrObjX2[8] = moneyArrObjX2[8] + 2;
            changeArrObj.push(moneyArrObjX2);
            let moneyArrObjX3 = [...moneyArrObjX2];
            moneyArrObjX3[7] = 1;
            moneyArrObjX3[8] = moneyArrObjX3[8] + 2;
            changeArrObj.push(moneyArrObjX3);
            let moneyArrObjX4 = [...moneyArrObjX3];
            moneyArrObjX4[7] = 0;
            moneyArrObjX4[8] = moneyArrObjX4[8] + 2;
            changeArrObj.push(moneyArrObjX4);
            moneyArrObjX1 = [...moneyArrObjX4];
          } else {
            let moneyArrObjX3 = [...moneyArrObjX1];
            moneyArrObjX3[7] = 1;
            moneyArrObjX3[8] = moneyArrObjX3[8] + 2;
            changeArrObj.push(moneyArrObjX3);
            let moneyArrObjX4 = [...moneyArrObjX3];
            moneyArrObjX4[7] = 0;
            moneyArrObjX4[8] = moneyArrObjX4[8] + 2;
            changeArrObj.push(moneyArrObjX4);
          }
        } else {
          let moneyArrObjX1 = [...moneyArrObjXX];
          moneyArrObjX1[6] = 1;
          moneyArrObjX1[7] = moneyArrObjX1[7] + 2;
          moneyArrObjX1[8] = moneyArrObjX1[8] + 1;
          changeArrObj.push(moneyArrObjX1);
          if (moneyArrObjX1[7] === 3) {
            let moneyArrObjX2 = [...moneyArrObjX1];
            moneyArrObjX2[7] = 2;
            moneyArrObjX2[8] = moneyArrObjX2[8] + 2;
            changeArrObj.push(moneyArrObjX2);
            let moneyArrObjX3 = [...moneyArrObjX2];
            moneyArrObjX3[7] = 1;
            moneyArrObjX3[8] = moneyArrObjX3[8] + 2;
            changeArrObj.push(moneyArrObjX3);
            let moneyArrObjX4 = [...moneyArrObjX3];
            moneyArrObjX4[7] = 0;
            moneyArrObjX4[8] = moneyArrObjX4[8] + 2;
            changeArrObj.push(moneyArrObjX4);
            moneyArrObjX1 = [...moneyArrObjX4];
          } else {
            let moneyArrObjX3 = [...moneyArrObjX1];
            moneyArrObjX3[7] = 1;
            moneyArrObjX3[8] = moneyArrObjX3[8] + 2;
            changeArrObj.push(moneyArrObjX3);
            let moneyArrObjX4 = [...moneyArrObjX3];
            moneyArrObjX4[7] = 0;
            moneyArrObjX4[8] = moneyArrObjX4[8] + 2;
            changeArrObj.push(moneyArrObjX4);
            moneyArrObjX1 = [...moneyArrObjX4];
          }
          moneyArrObjX1[6] = 0;
          moneyArrObjX1[7] = moneyArrObjX1[7] + 2;
          moneyArrObjX1[8] = moneyArrObjX1[8] + 1;
          changeArrObj.push(moneyArrObjX1);
          if (moneyArrObjX1[7] === 3) {
            let moneyArrObjX2 = [...moneyArrObjX1];
            moneyArrObjX2[7] = 2;
            moneyArrObjX2[8] = moneyArrObjX2[8] + 2;
            changeArrObj.push(moneyArrObjX2);
            let moneyArrObjX3 = [...moneyArrObjX2];
            moneyArrObjX3[7] = 1;
            moneyArrObjX3[8] = moneyArrObjX3[8] + 2;
            changeArrObj.push(moneyArrObjX3);
            let moneyArrObjX4 = [...moneyArrObjX3];
            moneyArrObjX4[7] = 0;
            moneyArrObjX4[8] = moneyArrObjX4[8] + 2;
            changeArrObj.push(moneyArrObjX4);
            moneyArrObjX1 = [...moneyArrObjX4];
          } else {
            let moneyArrObjX3 = [...moneyArrObjX1];
            moneyArrObjX3[7] = 1;
            moneyArrObjX3[8] = moneyArrObjX3[8] + 2;
            changeArrObj.push(moneyArrObjX3);
            let moneyArrObjX4 = [...moneyArrObjX3];
            moneyArrObjX4[7] = 0;
            moneyArrObjX4[8] = moneyArrObjX4[8] + 2;
            changeArrObj.push(moneyArrObjX4);
            moneyArrObjX1 = [...moneyArrObjX4];
          }
        }
      }
      console.log(changeArrObj);
      setChangeArr(changeArrObj);
    } else alert("You have not enough money");
  };
  const setItemValue = (clicked) => {
    let stateObj = { ...state };
    if (clicked === 1) {
      stateObj.itemValue = 300;
      stateObj.itemName = "Coca-cola";
    } else if (clicked === 2) {
      stateObj.itemValue = 7000;
      stateObj.itemName = "Tent";
    } else {
      stateObj.itemValue = 18000;
      stateObj.itemName = "Тraining apparat";
    }
    setState(stateObj);
  };
  const setInputValue = (e) => {
    let stateObj = { ...state };
    stateObj.inputValue = e.target.value;
    setState(stateObj);
  };
  return (
    <div className="shop-body">
      <ItemsForSale setItemValue={setItemValue}></ItemsForSale>
      {state.itemName && (
        <Payment
          state={state}
          setInputValue={setInputValue}
          clickPay={clickPay}
        ></Payment>
      )}
      {changeArr.length !== 0 && (
        <Change state={state} changeArr={changeArr}></Change>
      )}
    </div>
  );
}
