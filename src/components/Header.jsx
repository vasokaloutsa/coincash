import NavBar from "./NavBar";
import CoinCashInfo from "./CoinCashInfo";
import {
  FlexContainer,
  LinearGradientContainer,
} from "./styles/Containers.styled";
import Iphone from "../assets/icons/Iphone";
import { BasicText } from "./styles/Texts.styled";

const Header = () => {
  return (
    <LinearGradientContainer>
      <NavBar navBarItems={["Features", "About", "Contact"]} hasButton margin="44px 164px 164px"/>
      <FlexContainer gap="46px" justifyContent="end">
        <CoinCashInfo />
        <Iphone />
      </FlexContainer>
      <div
        style={{
          backgroundColor: "#0066FF",
          textAlign: "center",
          padding: "24px 0",
        }}
      >
        <BasicText
          fontSize="24px"
          lineHeight="36px"
          color="#fff"
          max-width="560px"
        >
          <span>over 200,000+ users have chosen COINCASH</span>
          <br /> for everyday payments
        </BasicText>
      </div>
    </LinearGradientContainer>
  );
};

export default Header;
