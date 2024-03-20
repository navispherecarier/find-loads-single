import '../Footer/footer.css';
import footerLogoBig from '../../img/chr-logo.svg';
import footerLogoSmall from '../../img/chr-logo-short.svg';

function Footer() {
  return (
    <footer id="bottom-footer">
          <img src={footerLogoBig} alt="C.H. Robinson" width="152" height="34" className="footerImg" />
          <img src={footerLogoSmall} alt="C.H. Robinson" width="152" height="34" className="footerImgTwo" />
          <div className="footer-links">
              <a href="https://www.chrobinson.com/en-us/privacy-notice/" className="footer-link" target="_blank">Global Privacy Notice<span className="visually-hidden">opens in new tab</span></a>
                  <span className="divide">|</span>
              <a href="https://www.chrobinson.com/your-privacy-rights" className="footer-link" target="_blank">Your Privacy Rights<span className="visually-hidden">opens in new tab</span></a>
                  <span className="divide">|</span>
              <a href="https://www.chrobinson.com/en/us/Terms-Of-Use/" className="footer-link" target="_blank">Terms of Use<span className="visually-hidden">opens in new tab</span></a>
                  <span className="divide">|</span>
              <a href="https://www.chrobinson.com" className="footer-link" target="_blank">C.H. Robinson<span className="visually-hidden">opens in new tab</span></a></div>
          <div className="footer-copyright help-textfooter">©2000 - 2023 C.H. Robinson Worldwide, Inc.<br />
              <span className="js-all-rights-reserved">All rights reserved</span>
          </div>
    </footer>
  );
}

export default Footer;