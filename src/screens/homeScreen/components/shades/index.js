import React from "react";
import { Content, ShadesImg, SlideFirst, SlideSecond } from "./styles";

const Shades = ({ children }) => {
  return (
    <Content>
      <ShadesImg
        src="https://assets-global.website-files.com/63d04d4b1b28345af4504ddc/63d0517997cbdf1f63476db3_Slashs.svg"
        alt="img"
      />
      <SlideFirst
        src="https://assets-global.website-files.com/63d04d4b1b28345af4504ddc/63d0517997cbdf4e04476db4_Hollow%20Slash.svg"
        alt="img"
      />
      <SlideSecond
        src="https://assets-global.website-files.com/63d04d4b1b28345af4504ddc/63d0517997cbdf4e04476db4_Hollow%20Slash.svg"
        alt="img"
      />
      {children}
    </Content>
  );
};

export default Shades;
