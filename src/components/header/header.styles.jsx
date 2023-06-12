import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoAsLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const OptionsContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    border-color: black;
  }
`;
