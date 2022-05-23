import React from "react";

function Info(props) {
  return (
    <div>
      <div className="header">{props.activeData.title}</div>
      <div className="detail">{props.activeData.description}</div>
    </div>
  );
}

export default Info;
