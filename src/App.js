import "./App.css";
import AccountBookTemplete from "./components/AccountBookTemplete";
import AccountBookForm from "./components/AccountBookForm";
import AccountBookHead from "./components/AccountBookHead";
import AccountBookList from "./components/AccountBookList";
import { useState, useRef } from "react";

function App() {
  const [contents, setContents] = useState([
    {
      id: 1,
      date: 25,
      title: "교통비",
      category: "🚌",
      money: 55000,
    },
    {
      id: 2,
      date: 15,
      title: "카페",
      category: "☕",
      money: 4800,
    },
    {
      id: 3,
      date: 6,
      title: "편의점",
      category: "🍫",
      money: 2100,
    },
  ]);
  // addContent는 인풋으로 값을 받아온거를 기존 content에 추가
  const dateId = useRef(4);
  const addContent = (date, category, title, money) => {
    if (!date || !category || !title || !money) {
      alert("다시 입력해주세요");
      return;
    }

    const Newcontent = {
      id: dateId.current,
      date: date,
      category: category,
      title: title,
      money: money,
    };
    dateId.current += 1;
    setContents([...contents, Newcontent]);
  };

  const removeContents = (targetId) => {
    setContents(contents.filter((item) => item.id !== targetId));
  };

console.log(contents);
  return (
    <AccountBookTemplete>
      <AccountBookHead />
      <AccountBookList contents={contents} removeContents={removeContents} />
      <AccountBookForm addContent={addContent} />
    </AccountBookTemplete>
  );
}

export default App;
