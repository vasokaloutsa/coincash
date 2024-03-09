import CoincashLogo from "../assets/icons/CoinCashLogo";
import { NavBarContainer, NavBarItem } from "./styles/NavBar.styled";
import { FlexContainer } from "./styles/Containers.styled";
import { Button } from "./styles/Button.styled";

const NavBar = () => {
  return (
    <NavBarContainer>
      <CoincashLogo />
      <FlexContainer
        justifyContent="space-between"
        gap="24px"
        alignItems="center"
      >
        <NavBarItem>Features</NavBarItem>
        <NavBarItem>About</NavBarItem>
        <NavBarItem>Contact</NavBarItem>
        <Button primary width="167px">
          Get the app
        </Button>
      </FlexContainer>
    </NavBarContainer>
  );
};

export default NavBar;
