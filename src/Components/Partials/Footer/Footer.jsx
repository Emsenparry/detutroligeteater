import React from "react";
import { Link } from "react-router-dom";
import Facebook from '../../../Assets/SVG/Facebook.svg'
import Instagram from '../../../Assets/SVG/Instagram.svg'
import LinkedIn from '../../../Assets/SVG/LinkedIn.svg'
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>ADRESSE</h3>
        <p>Det utrolige teater</p>
        <p>Havnegade 901</p>
        <p>9000 Aalborg</p>
        <p>EAN 5798003279845</p>
        <p>CVR 1001 0012</p>
        <p className={styles.Pspan}>
          <span>Find vej på kort</span>
        </p>
      </div>
      <div>
                <div>
                    <h3>BILLETSERVICE</h3>
                    <p>Se åbningstider</p>
                    <p>Billettelefon: +45 96 31 80 80</p>
                    <p>billet@dut.dk</p>
                </div>
                <div>
                    <h3>ADMINISTRATION</h3>
                    <p>Telefon: +45 96 31 80 90</p>
                    <p>adm@dut.dk</p>
                </div>
            </div>
            <div>
                <h3>PRAKTISK INFO</h3>
                <p>Kontakt</p>
                <p>Kom trygt i teatret</p>
                <p>Presseside</p>
                <p>Skoleforestillinger</p>
                <p>Teatercaféen</p>
                <p>Handelsbetingelser</p>
            </div>
            <div className={styles.footerIcons}>
                <Link to={'/'}><img src={Facebook} alt="facebookIcon" /></Link>
                <Link to={'/'}><img src={Instagram} alt="InstagramIcon" /></Link>
                <Link to={'/'}><img src={LinkedIn} alt="LinkedInIcon" /></Link>
            </div>
    </footer>
  );
};

export default Footer;
