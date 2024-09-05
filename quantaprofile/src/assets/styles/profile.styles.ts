import styled from "styled-components";

import BgProfile from '../img/Rectangle 1056.svg';

import { Navbar, NavLink, InputGroup, Nav, Tab, Tabs, Dropdown } from "react-bootstrap";

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