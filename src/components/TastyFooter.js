import React from "react";
import styled from "styled-components";
import { colors, breakpoints } from "../helpers/globals";
import { FaPhoneAlt, FaRegEnvelope, FaGlobe } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export const TastyFooter = () => {
  return (
    <Container>
      <Col>
        <Row>
          <FaPhoneAlt size={22} />
          <ContactInfo href="tel:443301334342">0330 133 4342</ContactInfo>
        </Row>
        <Row>
          <FaRegEnvelope size={22} />
          <ContactInfo href="mailto:info@letseat.co.uk">
            info@letseat.co.uk
          </ContactInfo>
        </Row>
      </Col>
      <SignUpButton to="/">Get Started</SignUpButton>
      <Col>
        <Row>
          <FaGlobe size={22} />
          <ContactLink to="/">www.letseat.co.uk</ContactLink>
        </Row>

        <Row>
          <SocialBlock>
            FIND US ON |{" "}
            <SocialLink
              href="https://www.facebook.com/uk.lets.eat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook size={22} />
            </SocialLink>{" "}
            <SocialLink
              href="https://www.linkedin.com/company/lets-eat-uk/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={22} />
            </SocialLink>{" "}
            <SocialLink
              href="https://twitter.com/Lets_Eat_UK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter size={22} />
            </SocialLink>{" "}
            <SocialLink
              href="https://www.instagram.com/lets.eat.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram size={22} />
            </SocialLink>{" "}
          </SocialBlock>
        </Row>
      </Col>
      <MobileLinks>
        <Row>
          <FaPhoneAlt size={20} />
          <ContactInfo href="tel:443301334342">0330 133 4342</ContactInfo>
        </Row>
        <Row>
          <FaRegEnvelope size={20} />
          <ContactInfo href="mailto:info@letseat.co.uk">
            info@letseat.co.uk
          </ContactInfo>
        </Row>
        <Row>
          <FaGlobe size={20} />
          <ContactLink to="/">www.letseat.co.uk</ContactLink>
        </Row>
        <Row>
          <SocialBlock>
            FIND US ON |{" "}
            <SocialLink
              href="https://www.facebook.com/uk.lets.eat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook size={22} />
            </SocialLink>{" "}
            <SocialLink
              href="https://www.linkedin.com/company/lets-eat-uk/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={22} />
            </SocialLink>{" "}
            <SocialLink
              href="https://twitter.com/Lets_Eat_UK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter size={22} />
            </SocialLink>{" "}
            <SocialLink
              href="https://www.instagram.com/lets.eat.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram size={22} />
            </SocialLink>{" "}
          </SocialBlock>
        </Row>
      </MobileLinks>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.blue};
  padding: 64px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 32px 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    padding: 32px 0;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const ContactInfo = styled.a`
  margin: 0 0 0 8px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.blue};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`;

const SocialBlock = styled.p`
  margin: 0 0 0 8px;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.blue};
  display: flex;
  align-items: center;
`;

const SocialLink = styled.a`
  color: ${colors.blue};
  margin: 0;
`;

const ContactLink = styled(Link)`
  margin: 0 0 0 8px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.blue};
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`;

const SignUpButton = styled(Link)`
  background-color: ${colors.blue};
  color: ${colors.yellow};
  border: 1px solid ${colors.blue};
  font-size: 20px;
  border-radius: 32px;
  padding: 16px 64px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 800;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`;

const MobileLinks = styled.div`
  display: none;
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    padding: 24px;
    justify-content: center;
    align-items: center;
  }
`;
