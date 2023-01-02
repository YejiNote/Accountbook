import React from "react";
import "../style/AccountBookTemplete.scss";


const AccountBookTemplete = ({ children }) => {
  return (
    <div className="AccoutBookTemplete">
      <div className="content">{children}</div>
    </div>
  );
};

export default AccountBookTemplete;
