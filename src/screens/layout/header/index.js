import React from "react";
import Banner from "../banner";
import { LogoImg } from "./styles";

const Header = () => {
  return (
    <>
      <Banner />
      <LogoImg
        src="https://assets-global.website-files.com/63d04d4b1b28345af4504ddc/63d04d4b1b2834b407504f58_ACVLogoGradient_DarkBKGD-p-500.png"
        alt="img"
      />
    </>
  );
};

export default Header;
