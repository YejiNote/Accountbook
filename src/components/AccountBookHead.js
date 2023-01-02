import React from "react";
import "../style/AccountBookHead.scss";

const AccountBookHead = () => {
  return (
    <div className="head_container">
      {/* <h3 className="total">총 지출 : </h3>
      <select name="month" id="month" className="month">
        <option value="10월" id="10월" className="october">
          10월
        </option>
        <option value="11월" id="11월" className="november">
          11월
        </option>
        <option value="12월" id="12월" className="December">
          12월
        </option>
      </select> */}
      <h1 className="title">나만의 가계부</h1>
    </div>
  );
};

export default AccountBookHead;
