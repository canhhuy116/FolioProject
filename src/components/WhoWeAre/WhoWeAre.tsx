import * as React from 'react';
import images from '../../assets/images/indexImages';
import './styleWhoWeAre.scss';

function WhoWeArePage() {
  return (
    <div className="WhoWeAre">
      <div className="WhoWeAre__Shape3d">
        <div className="shape3dIMG">
          <img src={images.shape1} alt="shape 3d" />
        </div>
        <div className="grid">
          <div className="Headline">
            <img src={images.logoSymbol} alt="" className="Headline__logo" />
            <div className="Content">
              <div className="Content-Title">
                <span className="Content-Title__Number">01.</span>
                <span className="Content-Title__Caption">Who We Are</span>
              </div>
              <h2 className="Content__Text">We Make Designs that Lead and Inpire.</h2>
            </div>
            <div className="Arrow-Btn">
              <div className="Arrow-Btn__Box">
                <img src={images.leftNormal} alt="Left Arrow" />
                <img src={images.rightHover} alt="Right Arrow" />
              </div>
              {/* Mobile */}
              <span className="CurrentYearMobile">2020</span>
              <img src={images.PathStroke} alt="" className="DownIconMobile" />
            </div>
          </div>
          <div className="WWA-Body">
            <ul className="TimeLine">
              <li className="TimeLine__item">2017</li>
              <li className="TimeLine__item">2018</li>
              <li className="TimeLine__item">2019</li>
              <li className="TimeLine__item CurrentYear">2020</li>
              <li className="TimeLine__item">2021</li>
            </ul>
            <div className="WWA-Body__Img">
              <img src={images.whoweareIMG} alt="Computer" />
            </div>
          </div>
          <div className="WWA-Content">
            <div className="Content-Box">
              <div className="Content-WWA">
                <h2 className="Content-WWA__Title">A design team building a curated marketplace for UI designers.</h2>
                <p className="Content-WWA__Text">
                  4,404 curated design resources to energize your creative workflow. We&#39re a growing family of
                  334,531 designers and makers from around the world
                </p>
              </div>
              <button type="button" className="button--primary">
                <span className="Recent-Works">Contact Us</span>
              </button>
            </div>
            <div className="Number">
              <h1 className="Number__head">28</h1>
              <h6 className="Number__content">Bigest Branding</h6>
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeArePage;
