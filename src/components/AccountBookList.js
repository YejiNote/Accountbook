import React from "react";
import AccountBookListItem from "./AccountBookListItem";
import '../style/AccountBookList.scss';

const AccountBookList = (props) => {
  const { contents, removeContents } = props;
  return (
    <div className="AccountBookList">
      <table className="table">
        <tbody className="showInput">
       { contents.map(content => <AccountBookListItem content={content} key={content.id} removeContents={removeContents} />)}
       </tbody>
      </table>
    </div>
  );
};

export default AccountBookList;
