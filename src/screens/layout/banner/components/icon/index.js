import React from "react";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaInstagram, FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import { Container } from "./styles";

const icons = [
  {
    title: "facebook",
    comp: <TiSocialFacebook color="#ff9e1b" size={13} />,
  },
  {
    title: "twitter",
    comp: <TfiTwitterAlt color="#ff9e1b" size={9} />,
  },
  {
    title: "linkedin",
    comp: <TiSocialLinkedin color="#ff9e1b" size={14} />,
  },
  {
    title: "instagram",
    comp: <FaInstagram color="#ff9e1b" size={10} />,
  },
  {
    title: "apple",
    comp: <FaApple color="#ff9e1b" size={12} style={{ position: "relative", bottom: "0.5px" }} />,
  },
  {
    title: "playStore",
    comp: <IoLogoGooglePlaystore color="#ff9e1b" size={12} />
  }
];

const IconContainer = () => {
  return (
    <>
      {icons.map((icon) => (
        <Container key={icon.title}>{icon.comp}</Container>
      ))}
    </>
  );
};

IconContainer.defaultProps = {};

export default IconContainer;
