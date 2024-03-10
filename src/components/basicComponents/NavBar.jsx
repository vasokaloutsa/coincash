import CoincashLogo from "../../assets/icons/CoinCashLogo";
import CoincashLightLogo from "../../assets/icons/CoinCashLightLogo";
import MobileMenuIcon from "../../assets/icons/MobileMenuIcon";
import { NavBarContainer, NavBarItem } from "../styles/NavBar.styled";
import { FlexContainer } from "../styles/Containers.styled";
import { Button } from "../styles/Button.styled";
import React, { useState, useEffect } from "react";

const NavBar = ({
  navBarItems = [],
  hasButton = false,
  light,
  margin,
  hasBurgerIconOnMobile,
}) => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 900px)").matches
  );

  const [displayMenuIcon, setDisplayMenuIcon] = useState(
    isMobile && hasBurgerIconOnMobile
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 900px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);

  return (
    <NavBarContainer
      $alwaysRow={isMobile && hasBurgerIconOnMobile}
      margin={margin}
    >
      {light ? <CoincashLightLogo /> : <CoincashLogo />}
      {isMobile && hasBurgerIconOnMobile ? (
        <FlexContainer $justifyContent="space-around" $alwaysRow width="100vw">
          <MobileMenuIcon />
        </FlexContainer>
      ) : (
        <FlexContainer
          $justifyContent="space-between"
          gap="24px"
          $alignItems="center"
        >
          {navBarItems.map((item) => (
            <NavBarItem key={item} light={light}>
              {item}
            </NavBarItem>
          ))}
          {hasButton ? (
            <Button onClick={() => alert("HI")} $primary width="167px">
              Get the app
            </Button>
          ) : (
            <></>
          )}
        </FlexContainer>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
