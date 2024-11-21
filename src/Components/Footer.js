// Footer.js
import React from "react";
import logo from "../Imgs/logo_sam.jpeg";

const Footer = () => {
  return (
    <>
      <div className="footer-conteiner">
        <div className="logo-footer">Mr Kalpak</div>
        <div>
          <a href="https://wa.me/996704459561">WhatsApp</a>
        </div>
        <div>
          <a href="https://t.me/996704459561">Telegram</a>
        </div>
        <div>
          <a href="https://instagram.com/ilias_beknazarov06">Instagram</a>
        </div>
        <div>
          <a href="https://github.com/IliasBekazarov">Github</a>
        </div>
        <div>
          <a href="https://facebook.com/IliasBeknazarov">Facebook</a>
        </div>
        <div>
          <a href="https://linkedin.com/in/iliasbeknazarov">Linkedin</a>
        </div>
        <div>
          <a href="https://www.google.com/maps/place/Kyrgyzstan">KYRGYZTAN</a>
        </div>
        <div className="sameId">
          <a href="./">
            <img src={logo} alt="img" />
          </a>
          <div>Ilias Beknazarov</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
