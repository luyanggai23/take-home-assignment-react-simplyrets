import { StyledNavigationBar } from './../StyledComponents';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
  const { pathname } = useLocation();

  const getTitle = (path) => {
    if (pathname === '/listings') {
      return 'Property Listings';
    } else if (pathname === '/') {
      return 'Home Page';
    }
  }

  const title = getTitle(pathname);
  return (
    <StyledNavigationBar className="navbar">
      <Link to="/">Home</Link>
      <Link to="/listings">Property Listings</Link>
      <div>{ title }</div>
    </StyledNavigationBar>
  )
}

export default Header;