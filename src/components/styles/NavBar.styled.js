import styled from "styled-components";

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 44px 164px 164px;
`;

const NavBarItem = styled.a`
  color: #1c1b1f;
  font-weight: 600;
  font-size: 20px;
`;

export { NavBarItem, NavBarContainer };
