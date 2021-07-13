import { Link } from "react-router-dom";
import styled from "styled-components";
import StripImage from "../assets/images/BrandingStrip.svg";
import { breakpoints, colors } from "../helpers/globals";
import { FaArrowUp } from "react-icons/fa";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  position: relative;
`;

export const HeaderBar = styled.div`
  background-image: url(${StripImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 100%;
  min-height: 300px;
  height: auto;
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    min-height: 200px;
  }

  @media (min-width: ${breakpoints.extraLarge}) {
    min-height: 400px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  width: 100vh;
  justify-content: space-between;
  padding-top: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 16px 32px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px 16px;
  }
`;

export const Pizza = styled.img`
  position: absolute;
  top: 30%;
  max-width: 400px;
  margin: 0 auto 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 250px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 180px;
  }
`;

export const Logo = styled.img`
  height: 75px;
  width: auto;
  margin: auto;

  @media (max-width: ${breakpoints.tablet}) {
    height: 65px;
    width: auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 50px;
    width: auto;
  }
`;

export const LogoAlt = styled.img`
  height: 60px;
  width: auto;
  margin: 0;

  @media (max-width: ${breakpoints.tablet}) {
    height: 50px;
    width: auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 40px;
    width: auto;
  }
`;

export const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderText = styled.h1`
  color: #293250;
  font-weight: bold;
  font-size: 26px;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }
`;

export const HeaderTextThin = styled.span`
  color: #293250;
  font-weight: 400;
`;

export const NavRow = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
  font-weight: 400;
  color: #293250;
  font-size: 16px;
  padding-right: 10px;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 22px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: auto;
  padding: 10px;
`;

export const PageHeading = styled.h1`
  font-size: 32px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 28px;
  }
`;

export const SubHeading = styled.h1`
  font-size: 26px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 20px;
  }
`;

export const Copy = styled.p`
  font-size: 17px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 15px;
  }
`;

export const ExternalLink = styled.a`
  color: ${colors.green};
  font-weight: 800;
`;

export const InternalLink = styled(Link)`
  color: ${colors.green};
  font-weight: 800;
`;

export const ToTop = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const ArrowIcon = styled(FaArrowUp)`
  width: 16px;
  height: 16px;
  color: ${colors.blue};

  @media (max-width: ${breakpoints.mobile}) {
    width: 12px;
    height: 12px;
  }
`;

export const ToTopText = styled.p`
  color: ${colors.blue};
  font-weight: 800;
  font-size: 14px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
`;
