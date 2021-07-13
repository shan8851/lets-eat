import React from "react";
import styled from "styled-components";
import { colors, breakpoints } from "../helpers/globals";
import { FaPhoneAlt, FaRegEnvelope, FaGlobe } from "react-icons/fa";
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
      <SignUpButton>Get Started</SignUpButton>
      <Col>
        <Row>
          <FaGlobe size={22} />
          <ContactLink to="/">www.letseat.co.uk</ContactLink>
        </Row>
        <Row>
          <FaRegEnvelope size={22} />
          <ContactInfo>info@letseat.co.uk</ContactInfo>
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
          <FaRegEnvelope size={20} />
          <ContactInfo>info@letseat.co.uk</ContactInfo>
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

const SignUpButton = styled.button`
  background-color: ${colors.blue};
  color: ${colors.yellow};
  border: 1px solid ${colors.blue};
  font-size: 20px;
  border-radius: 32px;
  padding: 16px 64px;

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
  }
`;
