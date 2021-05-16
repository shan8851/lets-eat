import { Link } from "react-router-dom";
import styled from "styled-components";
import StripImage from "../assets/images/BrandingStrip.svg";
import { breakpoints, colors } from "../helpers/globals";
import { FaArrowUp } from "react-icons/fa";

export const Container = styled.div`
  /* background-image: url(${StripImage});
  background-repeat: no-repeat; */
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
  width: 100vw;
  min-height: 300px;
  height: auto;
  display: flex;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    min-height: 200px;
  }
`;

export const Logo = styled.img`
  max-width: 250px;
  margin: 0 auto 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 150px;
  }
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
`;

export const SubHeading = styled.h1`
  font-size: 26px;
`;

export const Copy = styled.p`
  font-size: 17px;
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
`;

export const ToTopText = styled.p`
  color: ${colors.blue};
  font-weight: 800;
  font-size: 14px;
`;
