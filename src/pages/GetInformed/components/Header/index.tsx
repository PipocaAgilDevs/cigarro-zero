import imgBanner from "@assets/GetInformed/banner-img.png";
import smallImgBanner from "@assets/GetInformed/banner_mobile.png";
import bannerWaves from "@assets/GetInformed/waves.svg";

import "./styles.css";

export function Header() {
  return (
    <div className="bg-informa-se">
      <section className="container">
        <div className="banner_wrapper">
          {/* <div className={styles.banner_img}>
            <img src={imgBanner} alt="" />
          </div> */}
          <picture className="banner_img">
            <source srcSet={smallImgBanner} media="(max-width: 768px)" />
            <img src={imgBanner} alt="Mulher feliz apontando para os cards" />
          </picture>

          <div className="banner_content">
            <h1>
              Você sabia que <br />
              <p>a sua saúde pode melhorar ainda hoje</p>
            </h1>

            <div className="banner_grid">
              <div className="banner_grid_wrapper">
                <span>Após 20 min sem fumar</span>
                <p>A pressão sanguínea e a pulsação voltam ao normal.</p>
              </div>
              <div className="banner_grid_wrapper">
                <span>Após 2 hora sem fumar</span>
                <p>Não há mais nicotina circulando no sangue do fumante.</p>
              </div>
              <div className="banner_grid_span banner_grid_wrapper">
                <span>Após 2 dias sem fumar</span>
                <p>
                  O olfato já percebe melhor o cheiro e o paladar já está mais
                  sensível.
                </p>
              </div>
            </div>

            <button className="banner_button">
              Conheça todos os benefícios de parar de fumar
            </button>
          </div>
        </div>
      </section>
      <div className="banner_waves">
        <img src={bannerWaves} alt="" />
      </div>
    </div>
  );
}
