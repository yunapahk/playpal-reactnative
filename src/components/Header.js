import { Link, useLocation } from "react-router-dom";

function Header(props) {
  // const location = useLocation();
  // const isHome = location.pathname === "/";
  //Add Featur + to create new note

  return (
    <nav className="nav">
        <Link to="/">
          <div>PlayPal</div>
        </Link>
    </nav>
  );
}

export default Header;