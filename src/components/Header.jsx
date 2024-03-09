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
      <NavBar />
      <FlexContainer gap="46px" justifyContent="space-between">
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
