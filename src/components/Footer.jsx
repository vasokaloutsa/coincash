import NavBar from "./basicComponents/NavBar";
import { LinearGradientContainer } from "./styles/Containers.styled";
import CoincashBasicText from "./basicComponents/CoincashBasicText";
import BasicInputFieldWithButton from "./basicComponents/BasicInputFieldWithButton";
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 900px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width: 900px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: isMobile ? "48px" : "136px",
    padding: isMobile ? "48px 24px" : "100px 0 36px",
  };
  return (
    <footer>
      <LinearGradientContainer
        $lineargradientColor="linear-gradient(rgba(2, 13, 31, 1), rgba(0, 102, 255, 1))"
        style={style}
      >
        <CoincashBasicText
          headerTitle={["Get started"]}
          headerAlignText="center"
          colouredText="today"
          subHeaderText="Sign up to receive email updates on new products announcements, special promotions sales and more"
          subHeaderTextColor="#fff"
          light
          centerTextOnMobile={true}
        ></CoincashBasicText>

        <BasicInputFieldWithButton width="247px">
          Type your email here
        </BasicInputFieldWithButton>

        <NavBar
          navBarItems={["Privacy policy", "Terms and conditions"]}
          light
          margin="0px 164px 0px"
        />
      </LinearGradientContainer>
    </footer>
  );
};

export default Footer;
