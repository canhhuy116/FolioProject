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
        <div className="CTAContent">
          <div className="Headline">
            <img src={images.logoSymbol} alt="" className="Headline__logo" />
            <div className="Headline__content">
              <div className="Headline__content__tagline">
                <span className="taglineNumber">
                  05.
                </span> 
                <span className="taglineContent">
                  Call to action
                </span>
              </div>
              <h2 className="Headline__content__para">
                We Are Looking for Talented Designers
              </h2>
              <button className="button-primary">
                <span className="Recent-Works">
                  Apply Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
     );
}

export default CTAPage;