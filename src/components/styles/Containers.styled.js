import styled from "styled-components";

export const LinearGradientContainer = styled.div`
  background: ${(props) =>
    props.$lineargradientColor ||
    "linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 102, 255, 0.2))"};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flexDirectionColumn ? "column" : "row")};
  gap: ${(props) => (props.gap ? props.gap : "0px")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "normal")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "normal"};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "100%")};
  @media (max-width: 900px) {
    flex-direction: ${(props) => (props.$alwaysRow ? "row" : "column")};
    gap: 24px;
  }
`;
