import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkItem = styled(NavLink)`
  padding: 12px;
  color: black;
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
  &.active {
    color: tomato;
  }
  &:hover {
    color: tomato;
  }
`;
