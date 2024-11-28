import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="social-contact-section">
      <div className="social-group">
      <span>Любое использование контента Tasty Bytes запрещено.</span>

      </div>
      </div>

        <p>© 2024 Tasty Bytes. Все права защищены.</p>
        <div className="social-contact-section">
          
          <div className="social-group">
            <span>Следите за нами:</span>
            <a href="https://www.instagram.com/mmdv_5/ " target="_blank" rel="noopener noreferrer" className="icon-instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div className="contact-group">
            <span>Связаться с нами:</span>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="icon-telegram">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="icon-whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
