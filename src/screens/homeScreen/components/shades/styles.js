import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

export const ShadesImg = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  opacity: 0.2;
  left: 55%;
`;

export const SlideFirst = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  top: -1rem;
  left: 50.5%;
  height: 112vh;
  opacity: 1;
`;

export const SlideSecond = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  top: 8.2vh;
  left: 51.5%;
  height: 112vh;
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
`;
