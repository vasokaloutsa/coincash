import Card from "./Card";
import IconCard from "./IconCard";
import { FlexContainer } from "./styles/Containers.styled";
import ShopAnywhere from "../assets/images/shop-anywhere.svg";
import ZeroFees from "../assets/images/zero-fees.svg";
import AirplaneTickets from "../assets/icons/AirplaneTickets";
import Cart from "../assets/icons/Cart";
import Page from "../assets/icons/Page";
import CoincashBasicText from "./CoincashBasicText";
const Body = () => {
  const iconCardsData = [
    { icon: <AirplaneTickets />, text: ["You can", "book", "tickets"] },
    { icon: <Cart />, text: ["You can", "buy", "groceries"] },
    { icon: <Page />, text: ["You can", "pay", "your bills"] },
  ];

  const imgCardsData = [
    {
      imgOnLeft: true,
      headerTitle: ["Shop anywhere"],
      imgSrc: ShopAnywhere,
    },
    {
      imgOnLeft: false,
      headerTitle: ["Zero fees"],
      imgSrc: ZeroFees,
    },
  ];
  return (
    <FlexContainer
      flexDirectionColumn
      gap="136px"
      justifyContent="space-between"
      alignItems="center"
      margin="100px 0"
    >
      <CoincashBasicText
        headerTitle={["Buy anything you ever imagine"]} alignItems="center"
      ></CoincashBasicText>

      {/* Icon Cards */}
      <FlexContainer gap="300px">
        {iconCardsData.map((iconCard) => (
          <IconCard icon={iconCard.icon} text={iconCard.text} />
        ))}
      </FlexContainer>

      {/* ImageCards */}
      {imgCardsData.map((imgCard) => (
        <Card
          imgOnLeft={imgCard.imgOnLeft}
          headerTitle={imgCard.headerTitle}
          imgSrc={imgCard.imgSrc}
        />
      ))}
    </FlexContainer>
  );
};

export default Body;
