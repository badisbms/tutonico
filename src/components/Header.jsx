import { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  
  render() {
    return (
      <div>
        <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">About</Link>
        </nav>
    
      </div>
    );
  }
}

export default Header;
