import React, { useState } from "react";
import Logo from "./assets/images/Lets Eat Primary Logo Blue.svg";
import styled from "styled-components";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import LoadingSpinner from "./LoadingSpinner";

function App() {
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
                  placeholder="Enter your email address for some tasty treats"
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

                {error && <ErrorText>{errorMessage}</ErrorText>}
              </SignupContainer>
            );
          }}
        />
      )}
      {signedUp && <Success>Thank for signing up, we'll be in touch.</Success>}
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 0;
  padding: 0 20px;
  background-color: #293250;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeaderLogo = styled.img`
  width: 250px;
`;

const Tagline = styled.h1`
  color: #26d07c;
`;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  min-width: 300px;
  padding: 20px;
  border: 3px solid #ffd55a;
  background-color: #ffd55a;
  border-radius: 30px;
  color: #293250;
  font-weight: 800;
  ::placeholder {
    color: #293250;
  }
`;

const SignupButton = styled.button`
  width: fit-content;
  margin: auto;
  background: none;
  border: none;
  cursor: pointer;
  color: #26d07c;
  margin-top: 20px;
  font-size: 32px;
  padding-bottom: 10px;
  :hover {
    border-bottom: 3px solid #26d07c;
  }
  :focus {
    outline: none;
  }
  :focus-visible {
    outline: none;
  }
`;

const ErrorText = styled.p`
  font-size: 32px;
  color: #fff;
  font-weight: 800;
`;

const Success = styled.h2`
  font-size: 32px;
  color: #fff;
`;
