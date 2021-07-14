import React from "react";
import {
  Container,
  HeaderBar,
  HeaderText,
  HeaderTextContainer,
  HeaderTextThin,
  LogoAlt,
  LogoWrapper,
  Pizza,
} from "../styles/ContentPageStyles";
import styled from "styled-components";
import PizzaImage from "../assets/images/pizza.png";
import Underline from "../assets/images/UnderLine.svg";

import Logo from "../assets/images/LogoSvg.svg";
import { colors, breakpoints } from "../helpers/globals";
import { TastyPointsHowTo } from "../components/TastyPointsHowTo";
import { TastyFooter } from "../components/TastyFooter";

export const TastyPoints = () => {
  return (
    <Container>
      <HeaderBar>
        <LogoWrapper>
          <LogoAlt src={Logo} />
          <HeaderTextContainer>
            <HeaderText>
              <HeaderTextThin>Earn</HeaderTextThin> Slices{" "}
              <HeaderTextThin>to</HeaderTextThin>
            </HeaderText>
            <HeaderText>
              <HeaderTextThin>Lower </HeaderTextThin>Prices
            </HeaderText>
          </HeaderTextContainer>
        </LogoWrapper>
        <Pizza src={PizzaImage} />
      </HeaderBar>

      <CenterContainer>
        <HeaderLarge>
          <WordWithUndeline>
            Let's <UnderlineImg src={Underline} alt="" />
          </WordWithUndeline>
          Reward your Hunger
        </HeaderLarge>

        <SubHeader>
          Get a taste of our reward points scheme by eating your way to our
          exclusive discounts. It pays to eat!
        </SubHeader>
        <Row>
          <Group>
            <Number>1</Number>
            <HeaderMid>
              <WordWithUndelineWithMargin>
                Create <UnderlineImgSml src={Underline} alt="" />
              </WordWithUndelineWithMargin>
              an account
            </HeaderMid>
            <Copy>and join the rewards point scheme</Copy>
          </Group>
          <Group>
            <Number>2</Number>
            <HeaderMid>
              <WordWithUndelineWithMargin>
                Eat <UnderlineImgSml src={Underline} alt="" />
              </WordWithUndelineWithMargin>
              your way to points
            </HeaderMid>
            <Copy>Points everytime you order plus many more ways to earn</Copy>
          </Group>
        </Row>
        <Row>
          <Group>
            <Number>3</Number>
            <HeaderMid>
              <WordWithUndelineWithMargin>
                Unlock
                <UnderlineImgSml src={Underline} alt="" />
              </WordWithUndelineWithMargin>
              more rewards
            </HeaderMid>
            <Copy>Receive exclusive offers and vouchers</Copy>
          </Group>
          <Group>
            <Number>4</Number>
            <HeaderMid>
              <WordWithUndelineWithMargin>
                Redeem <UnderlineImgSml src={Underline} alt="" />
              </WordWithUndelineWithMargin>
              your Tasty Points
            </HeaderMid>
            <Copy>For real money towards your next order</Copy>
          </Group>
        </Row>
      </CenterContainer>
      <TastyPointsHowTo />
      <TastyFooter />
    </Container>
  );
};

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  text-align: center;
  margin: 164px auto 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 100px auto 0 auto;
    padding: 16px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin: 32px auto 0 auto;
    padding: 16px;
  }
`;

const WordWithUndeline = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WordWithUndelineWithMargin = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 8px;
`;

const UnderlineImg = styled.img`
  width: 100px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 70px;
  }
`;

const UnderlineImgSml = styled.img`
  width: 50px;
`;

const HeaderLarge = styled.h1`
  display: flex;
  color: ${colors.blue};
  font-size: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 20px;
  }
`;

const HeaderMid = styled.h2`
  display: flex;
  color: ${colors.blue};
  font-size: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 22px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`;

const SubHeader = styled.h4`
  color: ${colors.blue};
  font-size: 24px;
  font-weight: 400;
  margin: 0;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`;

const Copy = styled.p`
  color: ${colors.blue};
  font-size: 20px;
  margin: 0;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 15px;
  }
`;

const Row = styled.div`
  display: flex;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 32px 0;
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

const Number = styled.div`
  height: 48px;
  width: 48px;
  font-size: 32px;
  border: 8px solid ${colors.blue};
  background-color: ${colors.yellow};
  color: ${colors.blue};
  border-radius: 50%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    height: 36px;
    width: 36px;
    font-size: 26px;
    border: 6px solid ${colors.blue};
  }
`;
