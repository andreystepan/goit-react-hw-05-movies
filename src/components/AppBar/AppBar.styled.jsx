import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  border-bottom: solid 1px;
  height: 50px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavLinkItem = styled(NavLink)`
  padding: 12px;
  color: black;
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;

  &.active {
    color: tomato;
  }
  &:hover {
    color: tomato;
  }
`;
