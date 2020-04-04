import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {Icon} from './Icon';
import images from '../styles/img';
import { Colours } from "./colours";

export function Header() {
  return (
    <Container>
      <Logo>
        <h1>Notes App</h1>
      </Logo>

      <div>
        <StyledNavLink
          border={Colours.primary}
          exact
          to="/"
        >
        <Icon src={images.actual} alt="actual-icon" />
          Actual
        </StyledNavLink>
        <StyledNavLink
          border={Colours.primary}
          to="/archive"
        >
          <Icon src={images.archive} alt="archive-icon"/>
         
          Archive
        </StyledNavLink>
        <StyledNavLink
          border={Colours.primary}
          to="/create"
        >
          <Icon  src={images.create} alt="create-icon" />
          Create
        </StyledNavLink>
      </div>
    </Container>
  );

}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 1160px;
  height: 60px;
  background-color: ${Colours.headerBackground};
  div {
    display: flex;
    margin-right: 50px;
  }
`;

const Logo = styled.div`
  margin-left: 50px;
  font-family: "Ubuntu", sans-serif;
  font-size: 17px;
  border-right: 5px solid;
  padding: 8px;
  
  color: ${Colours.primary};
  &:hover {
  left: 50%;
  color:orange;
  cursor: pointer;
  margin-left: -3px;
  top: 0;
    
    }
`;

const StyledNavLink = styled(NavLink)`
  color: ${p => p.border};
  text-decoration: none;
  
  outline: none;
  transition: all 0.5s ease;
  margin: 0 25px;
  padding: 5px 15px;
  border: 2px solid ${p => p.border};
  border-radius: 15px;
  &.active {
    background-color: ${p => p.border};
    color: #fff;
    transform:translateY(-3px)
    border-left: 6px solid ;
    position: absolute;
    left: 50%;
    
  };
  &:hover {
    transform:translateY(3px)
    background-color: orange
  }
`;
