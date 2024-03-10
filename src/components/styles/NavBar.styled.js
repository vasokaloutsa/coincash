import styled from "styled-components";

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

const NavBarItem = styled.a`
  color: ${(props) => (props.light ? "#fff" : "#1c1b1f")};
  font-weight: 600;
  font-size: 20px;
`;

export { NavBarItem, NavBarContainer };
