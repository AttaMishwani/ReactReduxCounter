import React from "react";

export default function Container({ children }) {
  return (
    <div className="card mx-auto" style={{ width: "70%" }}>
      <div className="card-body">{children}</div>
    </div>
  );
}
