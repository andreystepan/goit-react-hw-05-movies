import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  text-align: center;
`;

export const Item = styled.li`
  margin: 5px;
`;

export const LinkItem = styled(Link)`
  color: black;
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    color: tomato;
  }
`;
