import React from "react";
import Banner from "../layout/banner";
import { Container, BidCard } from "./styles";
import { Shades } from "./components";

const HomeScreen = () => {
  return (
    <Container>
      <Banner />
      <Shades>
        {/* <BidCard /> */}
      </Shades>
    </Container>
  );
};

export default HomeScreen;
