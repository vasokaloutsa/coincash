import styled from "styled-components";

export const Container = styled.h3`
  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 102, 255, 0.2));
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flexDirectionColumn ? "column" : "row")};
  gap: ${(props) => (props.gap ? props.gap : "0px")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "normal")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "normal"};
`;
