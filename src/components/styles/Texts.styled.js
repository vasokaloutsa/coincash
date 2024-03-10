import styled from "styled-components";

export const InfoHeader = styled.h3`
  font-weight: 700;
  font-size: 48px;
  color: ${(props) => (props.light ? "#FFFFFF" : "#1C1B1F")};
  line-height: 72px;
  text-align: ${(props) => (props.textAlign ? props.textAlign : "normal")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

export const ColouredText = styled.span`
  color: ${(props) => (props.color ? props.color : "#0066FF")};
`;

export const BasicText = styled.p`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "30px")};
  color: ${(props) => (props.color ? props.color : "#1C1B1F")};
  text-align: ${(props) => (props.alignText ? props.alignText : "center")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "100%")};
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;
