import { FlexContainer } from "./styles/Containers.styled";
import { InfoHeader, BasicText, ColouredText } from "./styles/Texts.styled";

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
}) => {
  return (
    <FlexContainer flexDirectionColumn alignItems={alignItems} gap="16px">
      <InfoHeader light={light} textAlign={headerAlignText}>
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
        maxWidth={maxWidth}
        width={width}
        alignText={alignText}
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
