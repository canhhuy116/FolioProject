import React from 'react';
import images from '../../assets/images/indexImages';
import './styleFooter.scss';

function FooterPage() {
  return (
    <div className="Footer">
      <div className="Contact">
        <div className="Contact__Top">
          <img src={images.logoSymbol} alt="" className="Headline__logo" />
          <p>👋 Say hello</p>
          <h2>A design team building a curated marketplace for UI designers.</h2>
        </div>
        <div className="Contact__Bottom">
          <div className="Contact__Bottom--Left">
            <p>Let’s talk about your next project</p>
            <button type="button" className="button--primary">
              <span className="Recent-Works">Contact Us</span>
            </button>
          </div>
          <div className="Contact__Bottom--Right">
            <img src={images.SpeachBubble} alt="" />
            <p>Invest in your designs today!</p>
          </div>
        </div>
      </div>
      <div className="Footer-Content">
        <div className="grid">
          <div className="Footer-Content-Top">
            <div className="Nav__logo">
              <img src={images.logo} alt="Logo" />
            </div>
            <p className="Footer-Content-Top__para">
              Agency is a full-service agency, busy designing and building beautiful digital products, brands, and
              experiences.
            </p>
            <ul className="Nav-menu">
              <li className="Nav-menu__item">About</li>
              <li className="Nav-menu__item">Work</li>
              <li className="Nav-menu__item">Services</li>
              <li className="Nav-menu__item">Jobs</li>
            </ul>
          </div>
          <div className="Footer-Social">
            <span className="Footer-Social__Left">© 2020, UI8 LLC.</span>
            <div className="Footer-Social__Right">
              <span>Follow us</span>
              <ul className="Social__ListIcon">
                <li className="Social__Icon">
                  <img src={images.FbIcon} alt="" />
                </li>
                <li className="Social__Icon">
                  <img src={images.YtbIcon} alt="" />
                </li>
                <li className="Social__Icon">
                  <img src={images.InstaIcon} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
