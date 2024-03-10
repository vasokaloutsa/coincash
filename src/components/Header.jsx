import NavBar from "./basicComponents/NavBar";
import CoinCashInfo from "./CoinCashInfo";
import {
  FlexContainer,
  LinearGradientContainer,
} from "./styles/Containers.styled";
import Iphone from "../assets/icons/Iphone";
import { BasicText } from "./styles/Texts.styled";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 700px)").matches
  );

  const [isTablet, setIsTablet] = useState(
    window.matchMedia("(max-width: 700px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 700px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));

    window
      .matchMedia("(max-width: 900px)")
      .addEventListener("change", (e) => setIsTablet(e.matches));
  }, []);
  return (
    <LinearGradientContainer>
      <NavBar
        navBarItems={["Features", "About", "Contact"]}
        hasButton
        margin={isMobile ? "" : "16px"}
        hasBurgerIconOnMobile
      />
      <FlexContainer
        gap="46px"
        $justifyContent="end"
        margin={isMobile ? "16px 0 0" : "136px 0 0"}
      >
        <CoinCashInfo />
        {isTablet ? (
          <span style={{ margin: "0 auto", height: "100%" }}>
            <Iphone
              height={isMobile ? 252 : 569}
              width={isMobile ? 360 : 689}
            />
          </span>
        ) : (
          <Iphone height={isMobile ? 252 : 569} width={isMobile ? 360 : 689} />
        )}
      </FlexContainer>
      <div
        style={{
          backgroundColor: "#0066FF",
          textAlign: "center",
          padding: "24px 0",
        }}
      >
        <BasicText
          fontSize="24px"
          $lineHeight="36px"
          color="#fff"
          max-width="560px"
        >
          <span>over 200,000+ users have chosen COINCASH</span>
          <br /> for everyday payments
        </BasicText>
      </div>
    </LinearGradientContainer>
  );
};

export default Header;
