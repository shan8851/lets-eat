import React, { useState } from "react";
import Logo from "../assets/images/BlueLogo.svg";
import styled from "styled-components";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Link } from "react-router-dom";
import { colors } from "../helpers/globals";

export const Landing = () => {
  const url =
    "https://letseat.us1.list-manage.com/subscribe/post?u=0e4342b2c9e594be5b35133a6&amp;id=a59e5b75f0";
  const [email, setEmail] = useState(null);
  const [signedUp, setSignedUp] = useState(false);

  return (
    <Container>
      <HeaderLogo src={Logo} alt="" />
      <Tagline>The food app that gives back</Tagline>
      {!signedUp && (
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => {
            const loading = status === "sending";
            const error = status === "error";
            const success = status === "success";
            const alreadySubscribed =
              message && /already subscribed/i.test(message);
            if (success || alreadySubscribed) {
              setSignedUp(true);
            }
            const errorMessage = alreadySubscribed
              ? "You're already signed up!"
              : "Something went wrong, please try again later.";

            if (loading) return <LoadingSpinner />;
            return (
              <SignupContainer>
                <Input
                  type="text"
                  placeholder="Enter your email for exclusive offers"
                  aria-label="Email input"
                  key="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <SignupButton
                  onClick={() => {
                    subscribe({ EMAIL: email });
                  }}
                >
                  Sign Up
                </SignupButton>
                <NavRow>
                  <NavLink to="/privacy">Privacy</NavLink>
                  <NavLink to="/terms">Terms</NavLink>
                </NavRow>

                {error && <ErrorText>{errorMessage}</ErrorText>}
              </SignupContainer>
            );
          }}
        />
      )}
      {signedUp && <Success>Thank for signing up, we'll be in touch.</Success>}
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  padding: 10px;
  background-color: ${colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const HeaderLogo = styled.img`
  width: 250px;
`;

const Tagline = styled.p`
  color: #26d07c;
  text-align: center;
  font-size: 24px;
`;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px 30px;
  min-width: 300px;
  border: 3px solid ${colors.yellow};
  background-color: ${colors.yellow};
  border-radius: 30px;
  color: ${colors.blue};
  font-weight: 800;
  ::placeholder {
    color: ${colors.blue};
    font-weight: 400;
  }
`;

const SignupButton = styled.button`
  margin: auto;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.green};
  margin-top: 20px;
  font-size: 24px;
  padding-bottom: 10px;
  text-decoration: underline;
  :focus {
    outline: none;
  }
  :focus-visible {
    outline: none;
  }
`;

const ErrorText = styled.p`
  font-size: 20px;
  color: ${colors.white};
  font-weight: 400;
    font-weight: 400;
  text-align: center'
`;

const Success = styled.h2`
  font-size: 20px;
  color: ${colors.white};
  font-weight: 400;
  text-align: center;
`;

const NavRow = styled.div`
  display: flex;
  justify-content: center;
`;

const NavLink = styled(Link)`
  color: ${colors.yellow};
  font-weight: 800;
  padding: 10px;
`;
