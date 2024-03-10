import Card from "./basicComponents/Card";
import IconCard from "./basicComponents/IconCard";
import { FlexContainer } from "./styles/Containers.styled";
import ShopAnywhere from "../assets/images/shop-anywhere.svg";
import ZeroFees from "../assets/images/zero-fees.svg";
import AirplaneTickets from "../assets/icons/AirplaneTickets";
import Cart from "../assets/icons/Cart";
import Page from "../assets/icons/Page";
import CoincashBasicText from "./basicComponents/CoincashBasicText";
import React, { useState, useEffect } from "react";

const Body = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 900px)").matches
  );
  const [iconCardGap, setIconCardGap] = useState("300px")
  useEffect(() => {
    window
      .matchMedia("(max-width: 900px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
      window
      .matchMedia("(max-width: 1171px)")
      .addEventListener("change", (e) => setIconCardGap("100px"));
  }, []);

  const scrollStyle = {
    overflowX: "scroll",
    width: "200px",
  };

  const iconCardsData = [
    {
      icon: <AirplaneTickets />,
      text: ["You can", "book", "tickets"],
    },
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
        headerTitle={["Buy anything you ever imagine"]}
        alignItems="center"
      ></CoincashBasicText>

      {/* Icon Cards */}

      {isMobile ? (
        <FlexContainer gap="120px" style={scrollStyle} $alwaysRow={true}>
          {iconCardsData.map((iconCard) => (
            <IconCard
              key={iconCard.text[2]}
              icon={iconCard.icon}
              text={iconCard.text}
            />
          ))}
        </FlexContainer>
      ) : (
        <FlexContainer gap={iconCardGap}>
          {iconCardsData.map((iconCard) => (
            <IconCard
              key={iconCard.text[2]}
              icon={iconCard.icon}
              text={iconCard.text}
            />
          ))}
        </FlexContainer>
      )}

      {/* ImageCards */}

      {imgCardsData.map((imgCard) => (
        <Card
          key={imgCard.headerTitle}
          imgOnLeft={imgCard.imgOnLeft}
          headerTitle={imgCard.headerTitle}
          imgSrc={imgCard.imgSrc}
        />
      ))}
    </FlexContainer>
  );
};

export default Body;
