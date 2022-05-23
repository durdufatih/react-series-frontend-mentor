import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import ButonList from "./ButonList";
import Info from "./Info";

function Dialog(props) {
  const [activeButtonIndex, setActiveButtonIndex] = useState(1);

  const setItemOrder = (id) => {
    setActiveButtonIndex(id);
  };

  return (
    <div className="container">
      <div className="popup">
        <div className="icon">
          <AiFillStar color="orange" width={28} height={28} />
        </div>
        <Info activeData={props.valueList.find((item) => item.id === activeButtonIndex)} />
        <ButonList
          active={activeButtonIndex}
          setLastOrder={setItemOrder}
          valueList={props.valueList}
        />
        <div className="summit">
          <button className="summitBtn">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
