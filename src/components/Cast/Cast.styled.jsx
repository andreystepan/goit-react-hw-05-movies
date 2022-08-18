import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  list-style: none;
  flex-basis: calc((100% - 20px) / 3);
  
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}

`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
`;
