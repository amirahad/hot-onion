import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row pb-3">
                    <div className="col-md-6 pb-5">
                        <img className="footer__logo" src={logo} alt="" />
                    </div>
                    <div className="col-md-3 ">
                        <ul>
                            <li>About Online food</li>
                            <li>Read our blog</li>
                            <li>Sign up to deliver</li>
                            <li>Add your restaurant</li>
                        </ul>
                    </div>
                    <div className="col-md-3 ">
                        <ul>
                            <li>About Online food</li>
                            <li>Read our blog</li>
                            <li>Sign up to deliver</li>
                            <li>Add your restaurant</li>
                        </ul>
                    </div>
                </div>
                <div className="row pb-4 pt-5">
                    <div className="col-md-6 footer__copy">
                        Copyright &copy; <a href="https://www/github.com/amirahad" target="_blank" className="owner">
                            Amir Ahad
                        </a>
                    </div>
                    <div className="col-md-2 footer__copy">Privacy Policy</div>
                    <div className="col-md-2 footer__copy">Terms of Use</div>
                    <div className="col-md-2 footer__copy">Pricing</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
