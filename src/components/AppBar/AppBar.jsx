import { NavLinkItem } from './AppBar.styled';

const AppBar = () => {
  return (
    <div>
      <NavLinkItem to="/" key="/">
        Home
      </NavLinkItem>
      <NavLinkItem to="/movies" key="/movies">
        Movies
      </NavLinkItem>
    </div>
  );
};

export default AppBar;
