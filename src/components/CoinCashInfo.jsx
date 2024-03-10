import { Button } from "./styles/Button.styled";
import CoincashBasicText from "./basicComponents/CoincashBasicText";

const CoinCashInfo = () => {
  return (
    <CoincashBasicText
      colouredText="COINCASH"
      headerTitle={["You can buy anything", "with"]}
    >
      <Button $primary width="276px">
        Download now for free
      </Button>
    </CoincashBasicText>
  );
};

export default CoinCashInfo;
