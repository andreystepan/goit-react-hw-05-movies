import { NavLinkItem, Header } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <NavLinkItem to="/" key="/">
        Home
      </NavLinkItem>
      <NavLinkItem to="/movies" key="/movies">
        Movies
      </NavLinkItem>
    </Header>
  );
};

export default AppBar;
