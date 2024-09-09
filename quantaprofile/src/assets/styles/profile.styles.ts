import styled from "styled-components";

import BgProfile from '../img/Rectangle 1056.svg';

import { Navbar, NavLink, InputGroup, Nav, Tab, Tabs, Dropdown, ListGroup, Row, Stack } from "react-bootstrap";
import {ContextAwareToggle} from "../../components/profile/ContextAwareToggle";

export const LoginBtn = styled.button`
    background-color: #FFB801;
    padding: 16px 20px;
    border-radius: 16px;
    border: none;
    align-items: center;
    color: #000000;
    font-weight: 600;
    font-size: 14px;
    width: 120px;
    height: 54px;

    img{
        padding: 2px;
    }
`;

export const CartBtn = styled.button`
    background-color: #242424;
    border-radius: 16px;
    border: none;
    padding: 16px 19px;
    margin-left: 10px;
`;

export const StyledNavbar = styled(Navbar)`
    padding: 0px 64px;
  .navbar-brand, .nav-link {
    color: #575757 !important;
  }

  .navbar-toggler-icon {
    filter: invert(1);
  }
`;

export const StyledNavLink = styled(NavLink)`

     && {
        color: #575757 !important;
    }
`;

export const StyledInputGroup = styled(InputGroup)`
    background-color: #242424;
    border-radius: 16px;
    overflow: hidden;
    height: 50px;
    width: 375px;

    @media (max-width: 1200px) {
      width: 260px;
    }

    .form-control {
        background-color: #242424;
        color: white;
        border: none;

        &::-webkit-search-cancel-button {
            -webkit-appearance: none;
            appearance: none;
        }

        &:focus {
            outline: none;
            box-shadow: none;
        }
    }

    .input-group-text {
        background-color: #242424;
        border: none;
        padding: 8px 12px;
    }

    img {
        width: 16px;
        height: auto;
    }
`;

export const ProfileTop = styled.div`
  margin-top: 20px;
`;


export const StyledNav = styled(Nav)`
  .nav-item {
  }

  .nav-link {
    color: #575757;
    padding: 10px 20px;
    transition: all 0.3s ease;
    border: none;

    &.active {
    color: #FFB801;
      background-color: transparent; 
    }

    &:hover {
      color: white;
    }

    &:disabled {
      background-color: #ccc;
      color: #999;
    }
  }
`;

export const StyledTabs = styled(Tabs)`
    border-bottom: #202020 1px solid;
  .nav-item {
  }

  .nav-link {
    color: #575757;
    padding: 10px 20px;
    transition: all 0.3s ease;
    border: none;

    width: 127px;

    &.active {
    color: #FFB801;
      background-color: transparent;
      border-bottom: #FFB801 1px solid;
    }

    &:hover {
      color: white;
    }

    &:disabled {
      color: #999;
    }
  }
`;

export const FilterBtn = styled.button`
    background-color: #202020;
    border-radius: 8px;
    border: none;
    color: #FFFFFF;
    padding: 12px 24px 12px 24px;
    align-items: center;

    img{
        padding-right: 8px;
    }
`;


export const StyledDropdown = styled(Dropdown)`

    .dropdown-toggle{
        background-color: transparent;
        border: 0.5px #FFB801 solid;
        border-radius: 16px;
        padding: 12px 10px 12px 10px;

        &::after{
            margin-left: 30px;
        }
    }

`;

export const BlinkingDot = styled.div`
  animation: blinker 3s linear infinite;
  color: #55FF5C;
  margin: 10px;
  font-size: 30px;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

export const StyledBlikingText = styled.label`
    color: #FFFFFF;
`;

export const FilterSwitch = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0.5px #FFB801 solid;
  border-radius: 16px;
  padding: 7px 5px 7px 5px;
`;

export const FilterIcon = styled.img`
`;

export const FilterDiv = styled.div`
  background-color: #242424;
  padding: 4px;
  display: flex;
  align-items: center;
  margin: 2px;
  border-radius: 6px;
`;

export const StyledListGroup = styled(ListGroup)`
  border-radius: 20px 20px;
  margin-top: 50px;
  margin-bottom: 70px;

  .list-group-item {
    background-color: #202020;
    color: #FFFFFF;
    border: none;
    padding: 20px;
    position: relative;
    width: 160px;

    @media (max-width: 1600px) {
      width: 160px;
    }

    @media (min-width: 992px) {
      width: 100%;
    }

    &:not(:last-child)::after {
      content: "";
      position: absolute;
      top: 30%;
      right: 0;
      width: 1px;
      height: 40%;
      background-color: #575757;
    }

    h4 {
      font-weight: 700;
      font-size: 18px;
    }

    span {
      color: #575757;
      font-weight: 500;
      font-size: 14px;
    }

    &:last-child {
      border-top-right-radius: 20px !important;
    }
    
    &:first-child {
      border-bottom-left-radius: 20px !important;
    }
  }
`;

export const SotialIconsContainer = styled.a`
  background-color: #575757;
  padding: 6px 8px 8px;
  border-radius: 8px;
  margin-right: 8px;
`;

export const ProfileLink = styled.a`
  color: #969595;
  margin-top: 10px;

  &:hover{
    color: white;
  }
`;


export const StyledProfileData = styled.span`
  color: #FFFFFF;
  margin-right: 30px;
`;

export const ProfileDataContainer = styled.div`
  color: #575757;
`;

export const EarningsPersent = styled.span`
  color: #62FF3B;
`;

export const ProfileNameContainer = styled.div`
  margin-bottom: 30px;
`;

export const ProfileStyledRow = styled(Row)`
    margin-top: 70px;
    align-items: center;

    h4 {
      color: #FFFFFF;
      font-weight: 700;
      font-size: 28px;
      margin-bottom: 0px;
    }

    label {
      color: #575757;
      font-weight: 500;
      font-size: 14px;
    }

`;

export const PrifileAccordionText = styled.p`
  color: #969595 !important;
  margin-bottom: 0px;
`;

export const StyledContextAwareToggle = styled(ContextAwareToggle)`
  color: red;
  border: none;
  padding: 10px;
  font-size: 16px;
  &:hover {
    background-color: rgba(255, 0, 0, 0.8);
  }
`;

export const StyledMoreBtn = styled.a`
  color: #FFFFFF !important;
  font-weight: 700;
  font-size: 14px;
  margin: 5px;
  text-decoration: none;
`;

export const AvatarImg = styled.img`
  position: absolute;
  width: 100px;
  height: auto;
  z-index: 2;
`;

export const ResponsiveStack = styled(Stack)`
  flex-direction: row;

  @media (min-width: 1200px) {
    flex-direction: column;
  }
`;