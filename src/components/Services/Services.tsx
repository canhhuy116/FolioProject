import * as React from 'react';
import images from '../../assets/images/indexImages';
import './styleServices.scss';

function ServicesPage() {
  return (
    <div className="Services">
      <div className="grid">
        <div className="Headline">
          <img src={images.logoSymbol} alt="" className="Headline__logo" />
          <div className="Content">
            <div className="Content-Title">
              <span className="Content-Title__Number">02.</span>
              <span className="Content-Title__Caption">What We Do</span>
            </div>
            <h2 className="Content__Text">We Make Designs that Lead and Inpire.</h2>
          </div>
          <div className="ArrowBtn">
            <img src={images.leftNormal1} alt="Left Arrow" className="LeftArrow" />
            <img src={images.rightHover} alt="Right Arrow" />
          </div>
        </div>
        <div className="Services__Cards">
          <div className="Card">
            <div className="Card__Box" />
            <div className="Card__Box" />
            <div className="Card__Box" />
            <div className="Card__Box" />
          </div>
          <div className="Card content">
            <div className="Card__Box">
              <img src={images.ServicesIcon1} alt="" className="Card__icon" />
              <span className="Card__name">Strategy</span>
            </div>
            <div className="Card__Box Card__Box--active">
              <div className="Card__Current">
                <img src={images.ServicesIcon2} alt="" className="Card__icon" />
                <span className="Card__name">Branding</span>
              </div>
            </div>
            <div className="Card__Box">
              <img src={images.ServicesIcon3} alt="" className="Card__icon" />
              <span className="Card__name">Interactive</span>
            </div>
            <div className="Card__Box">
              <img src={images.ServicesIcon4} alt="" className="Card__icon" />
              <span className="Card__name">Communicate</span>
            </div>
          </div>
        </div>
        <div className="Services__Achievement">
          <div className="ImgPhone">
            <img src={images.Phone} alt="Phone" />
          </div>
          <div className="Achievement">
            <div className="Achievement-Headline">
              <div className="Headline">
                <img src={images.logoSymbol} alt="" />
                <div className="Content-Title">
                  <span className="Content-Title__Number">03.</span>
                  <span className="Content-Title__Caption">Achievement</span>
                </div>
              </div>
              <h2 className="Content__Text">A design team building a curated marketplace for UI designers.</h2>
            </div>
            <div className="Number">
              <h1 className="Number__head">68</h1>
              <h6 className="Number__content">😎 Successful Projects</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
