import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => props.width};
  height: 54px;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  background-color: ${(props) => (props.primary ? "#0066ff" : "#A3A6AA")};
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
`;
