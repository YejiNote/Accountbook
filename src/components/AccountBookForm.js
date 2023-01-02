import React, { useState } from "react";
import "../style/AccountBookForm.scss";

const AccountBookForm = ({ addContent }) => {
  const [input, setinput] = useState({
    date: "",
    category: "",
    title: "",
    money: "",
  });
  //input이 바뀔 때마다 값을 받아와줌
  const inputHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  //addItem이 실행되면 최종데이터가 들어감
  const additem = (e) => {
    e.preventDefault();
    addContent(input.date, input.category, input.title, input.money);
  };

  return (
    <div className="formContainer">
      <form className="formInsert">
        <span className="formTitle">Date</span>
        <input
          type="date"
          name="date"
          className="form"
          onChange={inputHandler}
        />

        <span className="formTitle">Category</span>
        <select
          name="category"
          id="category"
          className="form"
          onChange={inputHandler}
        >
          <option value="디폴트">카테고리를 고르세요</option>
          <option value="☕">카페</option>
          <option value="🍽">외식</option>
          <option value="🥐">디저트</option>
          <option value="👜">쇼핑</option>
          <option value="🎁">선물</option>
          <option value="📨">공과금</option>
          <option value="🚇">교통비</option>
          <option value="📱">통신비</option>
          <option value="⛪">헌금</option>
        </select>

        <span className="formTitle">Title</span>
        <input
          type="text"
          placeholder="ex) 친구랑 애프터눈티세트"
          className="form"
          name="title"
          onChange={inputHandler}
        />

        <span className="formTitle">Amount</span>
        <input
          type="number"
          className="form"
          placeholder="ex) 22000"
          name="money"
          onChange={inputHandler}
        />
      </form>

      <button className="addBtn" onClick={additem}>
        추가
      </button>
    </div>
  );
};

export default AccountBookForm;
