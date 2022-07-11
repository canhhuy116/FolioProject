import React from 'react';
import images from '../../assets/images/indexImages';
import './styleCTA.scss';

function CTAPage() {
  return (
    <div className="CTA">
      <div className="CTA__maskImg">
        <img src={images.HeroBG} alt="" />
      </div>
      <div className="CTA__phoneImg">
        <img src={images.PhoneIllustration} alt="" />
      </div>
      <div className="CTA-Content">
        <div className="Headline">
          <img src={images.logoSymbol} alt="" className="Headline__logo" />
          <div className="Content">
            <div className="Content-Title">
              <span className="Content-Title__Number">05.</span>
              <span className="Content-Title__Caption">Call to action</span>
            </div>
            <h2 className="Content__Text">We Are Looking for Talented Designers</h2>
            <button type="button" className="button--primary">
              <span className="Recent-Works">Apply Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTAPage;
