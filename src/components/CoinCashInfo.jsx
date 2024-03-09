import { Button } from "./styles/Button.styled";
import CoincashBasicText from "./CoincashBasicText";

const CoinCashInfo = () => {
  return (
    <CoincashBasicText
      colouredText="COINCASH"
      headerTitle={["You can buy anything", "with"]}
      subHeaderText="The easiest way to use your cryptocurrencies for everyday purchases"
    >
      <Button primary width="276px">
        Download now for free
      </Button>
    </CoincashBasicText>
  );
};

export default CoinCashInfo;
