import styled from "styled-components";

export const InfoHeader = styled.h3`
  font-weight: 700;
  font-size: 48px;
  color: ${(props) => (props.$light ? "#FFFFFF" : "#1C1B1F")};
  line-height: 72px;
  text-align: ${(props) => props.textAlign || "initial"};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  @media (max-width: 900px) {
    max-width: ${(props) => props.maxWidth || "312px"};
    font-size: ${(props) => props.fontSize || "32px"};
    text-align: ${(props) => (props.$centerTextOnMobile ? "center" : "initial")};
  }
`;

export const ColouredText = styled.span`
  color: ${(props) => (props.color ? props.color : "#0066FF")};
`;

export const BasicText = styled.p`
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.fontSize || "20px"};
  line-height: ${(props) => props.lineHeight || "30px"};
  color: ${(props) => props.color || "#1C1B1F"};
  text-align: ${(props) => props.alignText || "center"};
  max-width: ${(props) => props.maxWidth || "100%"};
  width: ${(props) => props.width || "100%"};
  margin: ${(props) => props.margin || "0"};
  @media (max-width: 900px) {
    // max-width: ${(props) => props.maxWidth || "312px"};
    //  width: ${(props) => props.width || "312px"};
    // text-align: ${(props) => (props.$centerTextOnMobile ? "center" : "initial")};
  }
`;
