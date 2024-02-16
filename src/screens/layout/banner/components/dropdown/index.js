import React from "react";
import { Content, ContentText } from "./styles";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Dropdown = () => {
  return (
    <Content>
      <ContentText>ACV AUCTIONS</ContentText>
      <MdOutlineKeyboardArrowDown size={19} />
    </Content>
  );
};

export default Dropdown;
