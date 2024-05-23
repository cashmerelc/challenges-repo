import { BoxWithStyledComponents } from "@/components/BoxWithStyledComponents/BoxWithStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <HorizontalDiv>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </HorizontalDiv>
  );
}

const HorizontalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
