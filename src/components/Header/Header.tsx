import * as React from 'react';
import images from '../../assets/images/indexImages';
import './styleHeader.scss';

function HeaderPage() {
  return (
    <div className="Header">
      <div className="Navigation">
        <div className="Nav__logo">
          <img src={images.logo} alt="Logo" />
        </div>
        <ul className="Navbar-menu">
          <li className="Navbar-menu__item">About</li>
          <li className="Navbar-menu__item">Work</li>
          <li className="Navbar-menu__item">Services</li>
          <li className="Navbar-menu__item">Jobs</li>
          <span className="Nav__notify">2</span>
        </ul>
        <button type="button" className="button--primary">
          <span className="Recent-Works">Contact Us</span>
        </button>
        {/* Mobile */}
        <div className="Nav__BurgerIcon">
          <img src={images.burgerIcon} alt="" />
        </div>
      </div>
      <div className="grid">
        <div className="Header-Container">
          <div className="HeroContent">
            <div className="HeroContent-main">
              <h2 className="HeroContent__title">Stand Out from The Crowd.</h2>
              <p className="HeroContent__para">
                Agency is a full-service agency, busy designing and building beautiful digital products, brands, and
                experiences.
              </p>
            </div>
            <button type="button" className="button--primary">
              <span className="Recent-Works">Recent Work</span>
            </button>
          </div>
          <div className="HeroBG">
            <img src={images.HeroBG} alt="HeroBG" />
          </div>
          <div className="HeroImg">
            <img src={images.HeroImg} alt="HeroImg" />
          </div>
          <div className="ScrollDownIcon">
            <img src={images.CircleArrow} alt="" />
            <span>Scroll down</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
