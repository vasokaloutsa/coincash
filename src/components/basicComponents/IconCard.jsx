import { ColouredText, BasicText } from "../styles/Texts.styled";
import { FlexContainer } from "../styles/Containers.styled";
import { BasicIcon } from "../styles/Images.styled";
import React, { useState, useEffect } from "react";

const IconCard = ({ icon, text = [] }) => {
  //   text consists of 3 parts
  const [isTablet, setisTablet] = useState(
    window.matchMedia("(max-width: 1171px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 1171px)")
      .addEventListener("change", (e) => setisTablet(e.matches));
  }, []);

  return isTablet ? (
    <div>
      <BasicIcon>{icon}</BasicIcon>
      <BasicText $maxWidth="96px" fontSize="16px" $lineHeight="24px">
        {text[0]}
        <br />
        <ColouredText>{text[1]} </ColouredText>
        {text[2]}
      </BasicText>
    </div>
  ) : (
    <FlexContainer $flexDirectionColumn $alignItems="center" gap="36px">
      <BasicIcon>{icon}</BasicIcon>
      {text?.length > 0 ? (
        <BasicText fontSize="24px" $lineHeight="36px">
          {text[0]}
          <br />
          <ColouredText>{text[1]} </ColouredText>
          {text[2]}
        </BasicText>
      ) : (
        <></>
      )}
    </FlexContainer>
  );
};

export default IconCard;
