import { Button } from "./styles/Button.styled";
import CoincashBasicText from "./basicComponents/CoincashBasicText";
import React, { useState, useEffect } from "react";

const CoinCashInfo = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 900px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width: 900px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);
  return (
    <CoincashBasicText
      colouredText="COINCASH"
      headerTitle={["You can buy anything", "with"]}
      maxWidth={isMobile ? "312px" : "100%"}
      alignText="initial"
    >
      <Button onClick={() => alert("HI")} $primary width="276px">
        Download now for free
      </Button>
    </CoincashBasicText>
  );
};

export default CoinCashInfo;
