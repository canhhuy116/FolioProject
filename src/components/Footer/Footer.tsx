import images from '../../assets/images/indexImages';
import './styleFooter.scss';

function FooterPage() {
    return ( 
      <div className="Footer">
        <div className="Footer__Contact">
          <div className="Footer__Contact__Top">
            <img src={images.logoSymbol} alt="" className="Headline__logo" />
            <p>👋  Say hello</p>
            <h2>
              A design team building a curated marketplace for UI designers.
            </h2>
          </div>
          <div className="Footer__Contact__Bottom">
            <div className="Footer__Contact__BottomLeft">
              <p>Let’s talk about your next project</p>
              <button className="button-primary">
                <span className="Recent-Works">Contact Us</span>
              </button>
            </div>
            <div className="Footer__Contact__BottomRight">
              <img src={images.SpeachBubble} alt="" />
              <p>Invest in your designs today!</p>
            </div>
          </div>
        </div>
        <div className="Footer__Content">
          <div className="grid">
            <div className="Footer__Content__Top">
              <div className="Nav__logo">
                <img src={images.logo} alt="Logo" />
              </div>
              <p className="Footer__Content__Top__para">
                Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
              </p>
              <ul className="Nav__menu">
                <li className="Nav__menu-item">About</li>
                <li className="Nav__menu-item">Work</li>
                <li className="Nav__menu-item">Services</li>
                <li className="Nav__menu-item">Jobs</li>
              </ul>
            </div>
            <div className="Footer__Content__Social">
              <span className="Footer__Content__Social__Left">
                © 2020, UI8 LLC.
              </span>
              <div className="Footer__Content__Social__Right">
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