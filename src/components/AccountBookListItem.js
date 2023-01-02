import React from "react";
import "../style/AccountBookListItem.scss";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const AccountBookListItem = (props) => {
  const { content, removeContents } = props;
  return (
    <tr className="tr">
      <td className="td">{content.day}</td>
      <td className="td">{content.title}</td>
      <td className="td">{content.category}</td>
      <td className="td" onClick={() => removeContents(content.id)}>
        <IoIosRemoveCircleOutline />
      </td>
    </tr>
  );
};

export default AccountBookListItem;
