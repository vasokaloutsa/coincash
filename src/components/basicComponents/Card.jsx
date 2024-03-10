import { FlexContainer } from "../styles/Containers.styled";
import CoincashBasicText from "./CoincashBasicText";
import { BasicImg } from "../styles/Images.styled";
import React, { useState, useEffect } from "react";

const Card = ({ imgOnLeft, headerTitle, imgSrc, children }) => {
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
      $alignItems="center"
      $justifyContent="center"
      gap="100px"
      $maxWidth="1400px"
    >
      {isMobile ? (
        <>
          <BasicImg src={imgSrc} alt={headerTitle} />
          <CoincashBasicText
            headerTitle={headerTitle}
            subHeaderText={children}
            alignText="start"
            width="296px"
          ></CoincashBasicText>
        </>
      ) : imgOnLeft ? (
        <>
          <CoincashBasicText
            headerTitle={headerTitle}
            subHeaderText={children}
            alignText="start"
            maxWidth="472px"
          ></CoincashBasicText>
          {imgSrc ? <BasicImg src={imgSrc} alt={headerTitle} /> : <></>}
        </>
      ) : (
        <>
          {imgSrc ? <BasicImg src={imgSrc} alt={headerTitle} /> : <></>}
          <CoincashBasicText
            headerTitle={headerTitle}
            subHeaderText={children}
            alignText="start"
            width="472px"
          ></CoincashBasicText>
        </>
      )}
    </FlexContainer>
  );
};

export default Card;
