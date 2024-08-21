import { useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import LogoWhite from "@assets/logo-white.svg";

import "./styles.css";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToTop = useCallback(() => {
    // verifica se está na home se não redireciona para ela.
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Adiciona o efeito de scroll suave
      });
    } else {
      navigate("/");
      window.scrollTo(0, 0);
    }
  }, [location.pathname, navigate]);

  const handleSobreNosClick = () => {
    navigate("/sobre-nos");
    window.scrollTo(0, 0);
  };

  const handleInformeSeClick = () => {
    navigate("/informe-se");
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer_wrapper container">
        <div className="footer_links">
          <Link to="" onClick={handleScrollToTop}>
            <div className="LogoWhite">
              <img src={LogoWhite} alt="Logo Cigarro Zero" />
            </div>
          </Link>
          <nav className="nav_footer">
            <div className="list">
              <ul className="list_links">
                <li>
                  <Link to="" onClick={handleInformeSeClick}>
                    Informe-se
                  </Link>
                </li>
                <li>
                  <Link to="">Calculadora de saúde</Link>
                </li>
                <li>
                  <Link to="">Encontrar ajuda</Link>
                </li>
                <li>
                  <Link to="" onClick={handleSobreNosClick}>
                    Sobre nós
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <hr className="horizonRule" />
        <div className="footer_text">
          <div className="footer-text-left">
            <p>Copyright 2024 - Cigarro Zero - Todos os direitos reservados</p>
          </div>
          <div className="footer-text-right">
            <p>Sua saúde merece um respiro, abrace a vida!</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
