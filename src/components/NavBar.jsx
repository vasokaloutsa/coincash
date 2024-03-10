import CoincashLogo from "../assets/icons/CoinCashLogo";
import CoincashLightLogo from "../assets/icons/CoinCashLightLogo";
import { NavBarContainer, NavBarItem } from "./styles/NavBar.styled";
import { FlexContainer } from "./styles/Containers.styled";
import { Button } from "./styles/Button.styled";

const NavBar = ({
  navBarItems = [],
  hasButton = false,
  light = false,
  margin,
}) => {
  return (
    <NavBarContainer margin={margin}>
      {light ? <CoincashLightLogo /> : <CoincashLogo />}
      <FlexContainer
        justifyContent="space-between"
        gap="24px"
        alignItems="center"
      >
        {navBarItems.map((item) => (
          <NavBarItem light={light}>{item}</NavBarItem>
        ))}
        {hasButton ? (
          <Button primary width="167px">
            Get the app
          </Button>
        ) : (
          <></>
        )}
      </FlexContainer>
    </NavBarContainer>
  );
};

export default NavBar;
