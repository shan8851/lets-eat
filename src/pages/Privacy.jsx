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
  ExternalLink,
  HeaderBar,
} from "../styles/ContentPageStyles";

export const Privacy = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Container>
      <HeaderBar>
        <Logo src={YellowLogo} />
      </HeaderBar>
      <ToTop onClick={scrollToTop}>
        <ArrowIcon />
        <ToTopText>Scroll to top</ToTopText>
      </ToTop>
      <Content>
        <NavRow>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/terms">Terms</NavLink>
        </NavRow>
        <PageHeading>Privacy Policy</PageHeading>
        <Copy>
          Here at Let’s Eat we understand privacy is important to you and that
          you care how your data is collected, stored and used online. We
          respect the privacy of all our customers and will only collect and use
          your data as described here.
        </Copy>
        <SubHeading>Information About Us</SubHeading>
        <Copy>
          Let’s Eat is the trading name of MCS Tech Ltd, which is a company
          registered in England and Wales with a company number 13334738. Our
          trading address is G07 Boho 5 Bridge Street East, Middlesbrough,
          United Kingdom, TS2 1NY.
        </Copy>
        <SubHeading>What does this policy cover</SubHeading>
        <Copy>
          This policy applies to anyone using this site or mobile applications
          operated by Let’s Eat. We may from time to time have external links to
          other sites and organisations. This is in no way an endorsement of
          their products, services or opinions. We have no control over how they
          use your data, so we always advise you to check with their individual
          privacy policies before sharing any data.
        </Copy>
        <SubHeading>What data do we collect</SubHeading>
        <Copy>
          Depending on how you interact with our sites and mobile application we
          collect some or all of the following personal and non-personal
          information.
          <ul>
            <li>Name</li>
            <li>Address</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Demographic information</li>
            <li>Device information</li>
            <li>Cookies</li>
          </ul>
          When using our site you may be asked for payment information. Please
          be aware that all of the payments on our site are handled by Stripe,
          we have no access to this data and a separate agreement will be made
          between you and Stripe. Information about their privacy policy can be
          found{" "}
          <ExternalLink href="https://stripe.com/en-gb/privacy">
            here
          </ExternalLink>
          .
        </Copy>
        <SubHeading>How we use your data</SubHeading>
        <Copy>
          <ul>
            <li>
              Providing and managing access to our website and mobile
              applications.
            </li>
            <li>
              Tailoring your experience on our site and mobile applications.
            </li>
            <li>Replying to emails from you.</li>
            <li>Analysing your usage to improve our service</li>
            <li>
              Provide location services should you decide to share your
              geo-location with us.
            </li>
            <li>
              With your permission we may use your data for marketing purposes,
              such as email and SMS with news and promotions. We will not send
              you any unsolicited marketing or spam and we take all reasonable
              steps to ensure we comply with all GDPR regulations.
            </li>
          </ul>
        </Copy>
        <SubHeading>Who we share your data with</SubHeading>
        <Copy>
          <ul>
            <li>
              Let’s Eat partner restaurants to process your order and arrange
              delivery.
            </li>
            <li>
              Any law enforcement or regulatory body, government agency, court
              or other third party where we believe disclosure is necessary
              under applicable law or regulations
            </li>
            <li>
              Third parties that we use to promote, market or support our
              services. This includes social media platforms like facebook,
              payment processors like Stripe nad other advertising and marketing
              services.
            </li>
          </ul>
        </Copy>
        <SubHeading>How can you access your data</SubHeading>
        <Copy>
          You have the right to ask for a copy of any data about you held by us.
          To exercise this right please contact us via email on{" "}
          <ExternalLink href="mailto:info@letseat.co.uk">
            info@letseat.co.uk
          </ExternalLink>
        </Copy>
        <SubHeading>Date Retention</SubHeading>
        <Copy>
          We will keep your data for as long as we have a business need to do
          so, such as for the period of time you have an account with us. We
          will destroy or permanently anonymise your personal information at the
          point that we no longer need to process it for our ongoing legitimate
          business needs or for any legal reason.
        </Copy>
        <SubHeading>Contact Us</SubHeading>
        <Copy>
          If you have any questions or concerns about this Privacy Policy then
          please contact us:
        </Copy>
        <Copy>
          Email:{" "}
          <ExternalLink href="mailto:info@letseat.co.uk">
            info@letseat.co.uk
          </ExternalLink>
        </Copy>
        <Copy>
          Post: Suite G07, Boho 5 Bridge Street East, Middlesbrough, United
          Kingdom, TS2 1NY
        </Copy>
      </Content>
    </Container>
  );
};
