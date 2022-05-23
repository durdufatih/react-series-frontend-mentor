import React from "react";

function ButonList(props) {
  return (
    <div className="numbers">
      {props.valueList.map((element) => (
        <button
          key={element.id}
          onClick={() => {
            props.setLastOrder(element.id);
          }}
          className={`item ${element.id === props.active ? "active" : ""}`}
        >
          {element.id}
        </button>
      ))}
    </div>
  );
}

export default ButonList;
