import React from "react";
import YellowLogo from "../assets/images/YellowLogo.svg";
import {
  Container,
  ToTop,
  ArrowIcon,
  ToTopText,
  NavRow,
  NavLink,
  Logo,
  PageHeading,
  Content,
  Copy,
  SubHeading,
  InternalLink,
} from "../styles/ContentPageStyles";

export const Terms = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Container>
      <ToTop onClick={scrollToTop}>
        <ArrowIcon />
        <ToTopText>Scroll to top</ToTopText>
      </ToTop>
      <NavRow>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/terms">Privacy</NavLink>
      </NavRow>
      <Logo src={YellowLogo} />
      <Content>
        <PageHeading>Terms & Conditions</PageHeading>
        <Copy>
          This page (together with our Privacy Policy) sets out the terms and
          conditions on which we, MCS Tech LTD t/a Just Eat provide access to
          our website{" "}
          <InternalLink to="/">https://www.letseat.co.uk</InternalLink> and any
          mobile applications operated by Let’s Eat. Please read these terms
          carefully before using our platform. Use of the Website is also
          subject to these terms.
        </Copy>
        <Copy>
          We reserve the right to change these terms at our discretion and will
          update this page whenever we do so. Accessing any part of the Let’s
          Eat platform indicates that you agree to these terms.
        </Copy>
        <SubHeading>Information About Us</SubHeading>
        <Copy>
          Let’s Eat is the trading name of MCS Tech Ltd, which is a company
          registered in England and Wales with a company number 13334738. Our
          trading address is Suite G07, Boho 5, Bridge Street East,
          Middlesbrough, United Kingdom, TS2 1NY.
        </Copy>
        <SubHeading>General Terms</SubHeading>
        <Copy>
          If you wish to place an order with Let’s Eat this website and our
          mobile application will guide you through the process. All prices are
          clearly indicated to you. Furthermore you will have the opportunity to
          review and amend anything before committing to order. Please make sure
          to read these terms and check everything is correct before making any
          payment.
        </Copy>
        <SubHeading>Rewards Terms</SubHeading>
        <Copy>
          Let’s Eat gives back to its customers in the form of a loyalty system.
          Points are accrued as you use our platform and services, you are able
          to view your current status in your profile section of either the
          website or the mobile application.
        </Copy>
        <Copy>
          Points can be used to gain money off future orders with Let’s Eat,
          they are in no way redeemable in cash. Furthermore your points are
          unlocked in stages. 1000 points is the equivalent of a £10 discount
          off your order. However you must reach 1000 points before you can
          activate the discount (i.e you cannot use 900 points for £9.00 worth
          of discount). The same rules apply for any subsequent points earned.
          Discounts can only be activated one a 1000 point “block” has been
          earnt.
        </Copy>
        <Copy>
          Let’s Eat from time to time will run promotional campaigns where you
          can earn extra points, any of these promotions that require an order
          to be made are subject to a minimum order of £10 being placed.
        </Copy>
        <SubHeading>Voucher Terms</SubHeading>
        <Copy>
          The following terms and conditions apply to all vouchers issued by MCS
          Tech LTD t/a Let’s Eat. Vouchers may also be subject to additional
          terms and conditions on a voucher by voucher basis.
          <ul>
            <li>
              Unless otherwise stated in the terms all vouchers can only be used
              once.
            </li>
            <li>Only one voucher can be used per order.</li>
            <li>
              Vouchers are only valid online and are subject to availability.
            </li>
            <li>Vouchers can only be redeemed on the Let’s Eat platform.</li>
            <li>
              Vouchers are limited to one per Let’s Eat customer. Only one Let’s
              Eat account is to be created by any individual.
            </li>
            <li>
              Let’s Eat has the right to void, cancel, amend or withdraw any
              voucher at any time without notice if it is necessary to do so.
            </li>
            <li>
              Let’s Eat will not be liable for any loss occurred as a result of
              any voucher being void, cancelled, amended or withdrawn.
            </li>
          </ul>
        </Copy>
        <SubHeading>Our Terms</SubHeading>
        <Copy>
          MCS Tech LTD t/a Let’s Eat is an online platform which sits between
          you the consumer and the partner restaurants listed on our website and
          mobile application. The contract for the purchase of food and delivery
          service is between you (the consumer) and the food provider you place
          the order with. We are only facilitating the transaction.
        </Copy>
        <SubHeading>Cancellation & Amendments</SubHeading>
        <Copy>
          Once you have placed an order and payment has been taken you are
          unable to cancel or amend your order and your order will not be
          eligible for a refund.
        </Copy>
      </Content>
    </Container>
  );
};
