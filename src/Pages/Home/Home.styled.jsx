import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  list-style: none;
  margin-bottom: 10px;
`;
export const NavLinkItem = styled(NavLink)`
  color: blue;
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    color: tomato;
  }
`;
