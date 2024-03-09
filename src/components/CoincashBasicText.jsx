import { FlexContainer } from "./styles/Containers.styled";
import {
  InfoHeader,
  BasicText,
  ColouredText,
} from "./styles/Texts.styled";

const CoincashBasicText = ({
  headerTitle = [],
  subHeaderText,
  colouredText,
  children,
}) => {
  return (
    <FlexContainer flexDirectionColumn gap="16px">
      <InfoHeader>
        <>
          {headerTitle?.length >= 1 ? (
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
      <BasicText maxWidth="542px">{subHeaderText}</BasicText>
      {children}
    </FlexContainer>
  );
};

export default CoincashBasicText;
