import styles from "./banner.module.css";
import imgBanner from "../../../../assets/Informa-se/banner-img.png";
import smallImgBanner from "../../../../assets/Informa-se/banner_mobile.png";
import bannerWaves from "../../../../assets/Informa-se/waves.svg";

export function Banner() {
  return (
    <div className={styles["bg-informa-se"]}>
      <section className={styles.container}>
        <div className={styles.banner_wrapper}>
          {/* <div className={styles.banner_img}>
            <img src={imgBanner} alt="" />
          </div> */}
          <picture className={styles.banner_img}>
            <source srcSet={smallImgBanner} media="(max-width: 768px)" />
            <img src={imgBanner} alt="Mulher feliz apontando para os cards" />
          </picture>

          <div className={styles.banner_content}>
            <h1>
              Você sabia que <br />
              <span>a sua saúde pode melhorar ainda hoje</span>
            </h1>

            <div className={styles.banner_grid}>
              <div className={styles.banner_grid_wrapper}>
                <span>Após 20 min sem fumar</span>
                <p>A pressão sanguínea e a pulsação voltam ao normal.</p>
              </div>
              <div className={styles.banner_grid_wrapper}>
                <span>Após 2 hora sem fumar</span>
                <p>Não há mais nicotina circulando no sangue do fumante.</p>
              </div>
              <div
                className={`${styles.banner_grid_span} ${styles.banner_grid_wrapper}`}
              >
                <span>Após 2 dias sem fumar</span>
                <p>
                  O olfato já percebe melhor o cheiro e o paladar já está mais
                  sensível.
                </p>
              </div>
            </div>

            <button className={styles.banner_button}>
              Conheça todos os benefícios de parar de fumar
            </button>
          </div>
        </div>
      </section>
      <div className={styles.banner_waves}>
        <img src={bannerWaves} alt="" />
      </div>
    </div>
  );
}
