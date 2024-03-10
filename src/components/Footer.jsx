import NavBar from "./NavBar";
import { LinearGradientContainer } from "./styles/Containers.styled";
import CoincashBasicText from "./CoincashBasicText";
import BasicInputFieldWithButton from "./BasicInputFieldWithButton";

const Footer = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "136px",
    padding: "100px 0 36px",
  };
  return (
    <footer>
      <LinearGradientContainer dark style={style}>
        <CoincashBasicText
          headerTitle={["Get started"]}
          headerAlignText="center"
          colouredText="today"
          subHeaderText="Sign up to receive email updates on new products announcements, special promotions sales and more"
          subHeaderTextColor="#fff"
          light
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
