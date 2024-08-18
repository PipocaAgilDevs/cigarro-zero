import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import Logo from "../Logo";
import "./header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const headerRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollUp = () => {
    setIsMenuOpen(false);
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


  useEffect(() => {
    const adjustBodyPadding = () => {
      if (headerRef.current) {
        document.body.style.paddingTop = `${headerRef.current.offsetHeight}px`;
      }
    };

    adjustBodyPadding();
    window.addEventListener("resize", adjustBodyPadding);

    return () => {
      window.removeEventListener("resize", adjustBodyPadding);
    };
  }, []);


  return (
    <header
      ref={headerRef}
      className={`header ${isScrolled ? "shadow-header" : ""}`}
    >
      <div className="header-content">
        <Link to="/" onClick={scrollUp}>
          <Logo />
        </Link>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <Link
              to="/informe-se"
              className={`header-btn ${
                location.pathname === "/informe-se" ? "active" : ""
              }`}
              onClick={scrollUp}
            >
              <li className="nav-list-item">
                Informe-se
                <SlArrowRight className="menu-arrow" />
              </li>
            </Link>

            <Link
              to="/calculadora"
              className={`header-btn ${
                location.pathname === "/calculadora" ? "active" : ""
              }`}
              onClick={scrollUp}
            >
              <li className="nav-list-item">
                Calculadora de saúde
                <SlArrowRight className="menu-arrow" />
              </li>
            </Link>

            <li className="nav-list-item">
              Encontrar ajuda
              <SlArrowRight className="menu-arrow" />
            </li>

            <Link
              to="/sobre-nos"
              className={`header-btn ${
                location.pathname === "/sobre-nos" ? "active" : ""
              }`}
              onClick={scrollUp}
            >
              <li className="nav-list-item">
                Sobre nós
                <SlArrowRight className="menu-arrow" />
              </li>
            </Link>
          </ul>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoCloseOutline size={40} fontWeight={400} />
          ) : (
            <IoIosMenu size={40} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
