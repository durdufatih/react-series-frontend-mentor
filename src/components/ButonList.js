import React from "react";

function ButonList(props) {
  


  return (
    <div className="numbers">
      {[...Array(5)].map((x, i) => (
        <button
          key={i}
          onClick={() => {
            props.setLastOrder(i + 1);
          }}
          className={`item ${i + 1 === props.active ? "active" : ""}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default ButonList;
