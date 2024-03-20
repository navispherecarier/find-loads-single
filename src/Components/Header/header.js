import '../Header/header.css';
import headerlogo from '../../img/CHR_NavCarrier_Brand_Logo.svg';

function Header() {

  return (
    <header>
        <div className="headerTop">
            <span className="carrier-logo" aria-hidden="true"><img className="chr-brand-svg" src={headerlogo} alt="NavisphereCarrier" /></span>
            <a id="ancLogIN" href="https://www.navispherecarrier.com/login" target="_blank">Login</a>
        </div>
    </header>
  );
}

export default Header;