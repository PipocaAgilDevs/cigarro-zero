import { Link, useNavigate } from "react-router-dom";
import "./footer.css";
import LogoWhite from "../../assets/logo-white.svg";

function Footer() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/Sobre-nos");
    window.scrollTo(0, 0);
  };

  const handleSobreNosClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <div className="FooterIcons">
        <div className="footer-text">
          <Link to="/" onClick={handleLogoClick}>
            <div className="LogoWhite">
              <img src={LogoWhite} alt="Logo Cigarro Zero" />
            </div>
          </Link>
          <nav className="navFooter">
            <div className="list">
              <ul className="listFooter">
                <li>
                  <Link to="#">Informe-se</Link>
                </li>
                <li>
                  <Link to="#">Calculadora de saúde</Link>
                </li>
                <li>
                  <Link to="#">Encontrar ajuda</Link>
                </li>
                <li>
                  <Link to="/Sobre-nos" onClick={handleSobreNosClick}>
                    Sobre nós
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <hr className="horizonRule" />
        <div className="footer-text">
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
