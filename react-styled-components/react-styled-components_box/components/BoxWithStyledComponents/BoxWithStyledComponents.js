import styled, { css } from "styled-components";

export function BoxWithStyledComponents({ $isBlack }) {
  return <StyledBox $isBlack={$isBlack} />;
}

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;
  ${({ $isBlack }) =>
    $isBlack &&
    css`
      background-color: black;
    `}
  ${({ $isBlack }) =>
    !$isBlack &&
    css`
      background-color: green;
    `}
  &:hover {
    background-color: red;
  }
`;
