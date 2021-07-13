import React from "react";
import styled from "styled-components";
import Account from "../assets/images/user.png";
import Refer from "../assets/images/refer.png";
import Cart from "../assets/images/cart.png";
import Money from "../assets/images/money.png";
import { colors } from "../helpers/globals";

export const TastyPointsHowTo = () => {
  return (
    <>
      <PointsRow>
        <PointsItem>
          <PointsImage src={Account} />
          <PointsInfo>
            <PointsText>Open an account</PointsText>
            <PointsValue>100 points</PointsValue>
          </PointsInfo>
        </PointsItem>
        <PointsItem>
          <PointsImage src={Money} />
          <PointsInfo>
            <PointsText>First time you order *</PointsText>
            <PointsValue>150 points</PointsValue>
          </PointsInfo>
        </PointsItem>
        <PointsItem>
          <PointsImage src={Refer} />
          <PointsInfo>
            <PointsText>Refer a friend **</PointsText>
            <PointsValue>200 points</PointsValue>
          </PointsInfo>
        </PointsItem>
        <PointsItem>
          <PointsImage src={Cart} />
          <PointsInfo>
            <PointsText>Earn as you spend</PointsText>
            <PointsValue>Points every order</PointsValue>
          </PointsInfo>
        </PointsItem>
      </PointsRow>
      <SmallPrint>* Minimum order of £10 applies</SmallPrint>
      <SmallPrint>
        ** Friend must go onto order (minimum value of £10) for you to receive
        points
      </SmallPrint>
    </>
  );
};

const PointsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const PointsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
  background-color: #eeeeee;
  margin: 16px;
  border-radius: 8px;
  width: 250px;
`;

const PointsImage = styled.img`
  height: 25px;
  width: auto;
  margin-right: 8px;
`;
const PointsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PointsText = styled.p`
  margin: 0;
  font-size: 12px;
`;

const PointsValue = styled.h6`
  font-size: 18px;
  font-weight: bolder;
  margin: 0;
`;

const SmallPrint = styled.p`
  margin: 0 0 8px 0;
  font-size: 12px;
  color: ${colors.blue};
  text-align: center;
`;
