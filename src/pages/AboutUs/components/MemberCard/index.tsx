import LinkedinIcon from "../../../../assets/SobreNos/linkedin-icon.svg";
import styles from "./styles.module.css";

type MemberCardProps = {
  name: string;
  position: string;
  photo: string;
  linkedinURL: string;
};

export default function MemberCard({
  name,
  position,
  photo,
  linkedinURL,
}: MemberCardProps) {
  return (
    <div className={styles.memberCard}>
      <img src={photo} alt={name} className={styles.photo} />
      <p className={styles.name}>{name}</p>
      <p className={styles.position}>{position}</p>
      <a className={styles.linkedinLink} href={linkedinURL} target="_blank">
        <img src={LinkedinIcon} alt="linkedin icon" />
        Linkedin
      </a>
    </div>
  );
}
