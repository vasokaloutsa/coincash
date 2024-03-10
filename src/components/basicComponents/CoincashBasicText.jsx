import { FlexContainer } from "../styles/Containers.styled";
import { InfoHeader, BasicText, ColouredText } from "../styles/Texts.styled";
import React, { useState, useEffect } from "react";

const CoincashBasicText = ({
  headerTitle = [],
  subHeaderText,
  subHeaderTextColor,
  colouredText,
  headerAlignText,
  alignText,
  alignItems,
  children,
  maxWidth,
  width,
  light,
  centerTextOnMobile = false,
}) => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 900px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width: 900px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);
  return (
    <FlexContainer
      $flexDirectionColumn
      $alignItems={centerTextOnMobile && isMobile ? "center" : alignItems}
      gap="16px"
    >
      <InfoHeader
        light={light}
        $textAlign={headerAlignText}
        $centerTextOnMobile={centerTextOnMobile}
      >
        <>
          {headerTitle?.length > 1 ? (
            <>
              {headerTitle[0]}
              <br />
              {headerTitle[1]}
            </>
          ) : (
            <>{headerTitle[0]}</>
          )}
        </>
        {colouredText ? <ColouredText> {colouredText} </ColouredText> : <></>}
      </InfoHeader>
      <BasicText
        $maxWidth={maxWidth}
        width={width}
        $alignText={alignText}
        color={subHeaderTextColor}
      >
        {subHeaderText
          ? subHeaderText
          : "The easiest way to use your cryptocurrencies for everyday purchases"}
      </BasicText>
      {children}
    </FlexContainer>
  );
};

export default CoincashBasicText;
