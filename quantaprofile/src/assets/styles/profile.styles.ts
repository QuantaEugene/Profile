import styled from "styled-components";

import { Navbar, NavLink, InputGroup } from "react-bootstrap";

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
