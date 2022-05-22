import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import ButonList from "./ButonList";

function Dialog(props) {
  const [btnOrder, setBtnOrder] = useState(1);
  
  const setItemOrder = (i) => {
    setBtnOrder(i);
  };
  console.log(props.valueList)
  const activeValue = props.valueList[btnOrder-1];
  return (
    <div className="container">
      <div className="popup">
        <div className="icon">
          <AiFillStar color="orange" width={28} height={28} />
        </div>
        <div className="header">{activeValue.title}</div>
        <div className="detail">{activeValue.description}</div>
        <ButonList active={btnOrder} setLastOrder={setItemOrder} />
        <div className="summit">
          <button className="summitBtn">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
