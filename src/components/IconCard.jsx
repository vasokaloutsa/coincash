import { ColouredText, BasicText } from "./styles/Texts.styled";
import { FlexContainer } from "./styles/Containers.styled";

const IconCard = ({ icon, text = [] }) => {
  //   text consists of 3 parts
  return (
    <FlexContainer flexDirectionColumn alignItems="center" gap="36px">
      {icon}
      {text?.length > 0 ? (
        <BasicText fontSize="24px" lineHeight="36px">
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
