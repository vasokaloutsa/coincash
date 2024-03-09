import { FlexContainer } from "./styles/Containers.styled";
import { InfoHeader, BasicText, ColouredText } from "./styles/Texts.styled";

const CoincashBasicText = ({
  headerTitle = [],
  subHeaderText,
  colouredText,
  alignText,
  alignItems,
  children,
  maxWidth,
  width,
}) => {
  return (
    <FlexContainer flexDirectionColumn alignItems={alignItems} gap="16px">
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
      <BasicText maxWidth={maxWidth} width={width} alignText={alignText}>
        {subHeaderText
          ? subHeaderText
          : "The easiest way to use your cryptocurrencies for everyday purchases"}
      </BasicText>
      {children}
    </FlexContainer>
  );
};

export default CoincashBasicText;
