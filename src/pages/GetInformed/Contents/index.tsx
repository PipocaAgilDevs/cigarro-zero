import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import ArrowRightIcon from "../../../assets/GetInformed/Contents/Icons/ArrowRightIcon.svg";
import HouseIcon from "../../../assets/GetInformed/Contents/Icons/HouseIcon.svg";
import RefAccordion from "./components/RefAccorion/index.tsx";
import contents, { contentsSlugs } from "./contents.tsx";
import styles from "./styles.module.css";

export default function GetInformed() {
  const { contentSlug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!contentSlug || !contentsSlugs.includes(contentSlug)) {
    return <Navigate to="/" replace />;
  }

  const content = contents[contentSlug as keyof typeof contents];

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link to="/">
          <img src={HouseIcon} alt="home icon" sizes="24px" />
        </Link>
        <img src={ArrowRightIcon} alt="arrow right icon" sizes="16px" />
        <p>{content.title}</p>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>{content.title}</h1>
        <h2 className={styles.subtitle}>{content.subtitle}</h2>

        <div className={styles.heroImage}>
          <img src={content.heroImage} alt="hero image" />
        </div>

        <div className={styles.writerCard}>
          <div className={styles.writerPhoto}>
            <img src={content.writer.photo} alt="writer photo" />
          </div>
          <div>
            <p>
              Escrito por <strong>{content.writer.name}</strong>
            </p>
            <p>{content.writer.articleDate}</p>
          </div>
        </div>

        <article className={styles.article}>
          <div dangerouslySetInnerHTML={{ __html: content.article }} />
          <RefAccordion />
        </article>
      </main>
    </div>
  );
}
