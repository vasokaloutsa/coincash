import NavBar from "./NavBar";
import CoinCashInfo from "./CoinCashInfo";

import { FlexContainer, Container } from "./styles/Containers.styled";
import Iphone from "../assets/icons/Iphone";

const Header = () => {
  return (
    <Container>
      <NavBar />
      <FlexContainer gap="46px" justifyContent="space-between">
        <CoinCashInfo />
        <Iphone />
      </FlexContainer>
    </Container>
  );
};

export default Header;
