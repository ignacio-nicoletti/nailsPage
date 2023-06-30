import styles from './footer.module.css';
import instagramIcon from '../../assets/instagram.png';
import wsp from '../../assets/wsp.png';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>calle</p>
      <p>Logo</p>
      <p>creador</p>

      <div>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >

          <Image src={instagramIcon} width={30} height={30} alt="Instagram" style={{marginRight:"15px" }}/>
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >

          <Image src={wsp} width={30} height={30} alt="logo wsp" />
        </a>

      </div>
    </div>
  );
};
export default Footer;
