import styled from "styled-components";

export const BasicImg = styled.img`
  width: ${(props) => props.width || "540px"};
  height: ${(props) => props.height || "360px"};
  @media (max-width: 1441px) {
    width: 300px;
    height: 350px;
  }
  @media (max-width: 900px) {
    width: 300px;
    height: 350px;
  }
`;

export const BasicIcon = styled.div`
  width: auto;
  height: ${(props) => props.height || "100%"};
  margin: 0 auto;
  @media (max-width: 900px) {
    width: auto;
    height: 30%;
  }
  @media (max-width: 900px) {
    width: 10%;
    height: auto;
    margin: 0;
  }
`;
