import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

class Header extends Component {
  render() {
    return (
      <nav className="header">
        <div className="header-logo">
          <img src={"/assets/img/logo-agysoft.jpg"} alt="logo-agysoft" />
        </div>
        <div className="header-nav">
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
          <Link to="/composantA">Liste des Utilisateurs</Link>
        </div>
      </nav>
    );
  }
}

export default Header;
