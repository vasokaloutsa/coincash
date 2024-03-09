import { FlexContainer } from "./styles/Containers.styled";
import CoincashBasicText from "./CoincashBasicText";

const Card = ({ imgOnLeft, headerTitle, imgSrc, children }) => {
  return (
    <FlexContainer alignItems="center" justifyContent="center" gap="100px">
      {imgOnLeft ? (
        <>
          <CoincashBasicText
            headerTitle={headerTitle}
            subHeaderText={children}
            alignText="start"
            width="472px"
          ></CoincashBasicText>
          {imgSrc ? <img src={imgSrc} alt={headerTitle} /> : <></>}
        </>
      ) : (
        <>
          {imgSrc ? <img src={imgSrc} alt={headerTitle} /> : <></>}
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
