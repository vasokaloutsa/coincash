import NavBar from "./NavBar";
import { LinearGradientContainer } from "./styles/Containers.styled";
import CoincashBasicText from "./CoincashBasicText";

const Footer = () => {
  return (
    <LinearGradientContainer dark>
      <CoincashBasicText
        headerTitle={["Get started"]}
        headerAlignText="center"
        colouredText="today"
        subHeaderText="Sign up to receive email updates on new products announcements, special promotions sales on more"
        subHeaderTextColor="#fff"
      ></CoincashBasicText>
      <NavBar navBarItems={["Privacy policy", "Terms and conditions"]} light />
    </LinearGradientContainer>
  );
};

export default Footer;
