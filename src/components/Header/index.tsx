import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import "./header.css";
import { useEffect, useState } from "react";


function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleInformeSeClick = () => {
    navigate("/Informe-se");
    window.scrollTo(0, 0);
  };

  const handleSobreNosClick = () => {
    navigate("/Sobre-nos");
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
      <div className="container">
        <Link to="/" onClick={handleLogoClick}>
          <Logo />
        </Link>

        <nav className="nav-bar">
          <ul className="nav-list">
            <Link
              to="/informe-se"
              onClick={handleInformeSeClick}
              className="header-btn"
            >
              <li className="nav-list-item">Informe-se</li>
            </Link>
            <li className="nav-list-item">Calculadora de saúde</li>
            <li className="nav-list-item">Encontrar ajuda</li>
            <Link
              to="/Sobre-nos"
              onClick={handleSobreNosClick}
              className="header-btn"
            >
              <li className="nav-list-item">Sobre nós</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
