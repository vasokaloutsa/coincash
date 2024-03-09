import styled from "styled-components";

export const LinearGradientContainer = styled.div`
  width: 100%;
  height: 100%;
  background:${(props) => (props.dark ? "linear-gradient(rgba(2, 13, 31, 1), rgba(0, 102, 255, 1))" : "linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 102, 255, 0.2))")};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flexDirectionColumn ? "column" : "row")};
  gap: ${(props) => (props.gap ? props.gap : "0px")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "normal")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "normal"};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
`;
