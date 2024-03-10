import styled from "styled-components";

export const InputField = styled.input`
  width: ${(props) => props.width};
  color: #a3a6aa;
  font-weight: 400;
  font-size: 20px;
  background-color: ${(props) => (props.primary ? props.primary : "#fff")};
  padding: 8px 8px 8px 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
