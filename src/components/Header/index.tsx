import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Logo";
import "./header.css";
import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleInformeSeClick = () => {
    navigate("/Informe-se");
    window.scrollTo(0, 0);
  };
  const handleCalculadoraClick = () => {
    navigate("/calculadora");
    window.scrollTo(0, 0);
  };
  const handleSobreNosClick = () => {
    navigate("/sobre-nos");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "shadow-header" : ""}`}>
      <div className="header-content">
        <Link to="/" onClick={handleLogoClick}>
          <Logo />
        </Link>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <Link
              to="/informe-se"
              onClick={handleInformeSeClick}
              className="header-btn"
            >
              <li className="nav-list-item">Informe-se</li>
            </Link>

            <Link
              to="/calculadora"
              onClick={handleCalculadoraClick}
              className="header-btn"
            >
              <li className="nav-list-item">Calculadora de saúde</li>
            </Link>

            <li className="nav-list-item">Encontrar ajuda</li>

            <Link
              to="/sobre-nos"
              onClick={handleSobreNosClick}
              className="header-btn"
            >
              <li className="nav-list-item">Sobre nós</li>
            </Link>
          </ul>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={40} /> : <FaBars size={40} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
