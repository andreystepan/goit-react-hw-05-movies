import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkBtn = styled(Link)`
  text-decoration: none;
  display: inline-block;
  margin: 8px;
  padding: 8px;
  border: solid 1px;
  border-radius: 5px;
  background: grey;
  color: white;
  &:hover {
    color: tomato;
  }
`;
export const Container = styled.div`
  border-bottom: solid 1px;
`;

export const Box = styled.div``;

export const NavLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  margin: 8px;
  padding: 8px;
  border: solid 1px;
  border-radius: 5px;
  background: grey;
  color: white;
  &:hover {
    color: tomato;
  }
`;
