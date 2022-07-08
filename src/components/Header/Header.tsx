import images from '../../assets/images/indexImages';
import './styleHeader.scss';

function HeaderPage() {
    return ( 
      <div className="Header">
        <div className="Navigation">
          <div className="Nav__logo">
            <img src={images.logo} alt="Logo" />
          </div>
          <ul className="Nav__menu">
            <li className="Nav__menu-item">About</li>
            <li className="Nav__menu-item">Work</li>
            <li className="Nav__menu-item">Services</li>
            <li className="Nav__menu-item">Jobs</li>
            <span className="Nav__notify">2</span>
          </ul>
          <button className="button-primary">
            <span className="Recent-Works">Contact Us</span>
          </button>
        </div>
        <div className='grid'>
          <div className="Header__Container">
            <div className="Header__HeroContent">
              <div className='Header__HeroContent__main'>
                <h2 className="Header__HeroContent__title">
                  Stand Out from The Crowd.
                </h2>
                <p className="Header__HeroContent__content">
                  Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
                </p>
              </div>
              <button className="button-primary">
                <span className="Recent-Works">
                  Recent Work
                </span>
              </button>
            </div>
            <div className='Header__HeroBG'>
              <img src={images.HeroBG} alt="HeroBG"  />
            </div>
            <div className='Header__HeroImg' >
              <img src={images.HeroImg} alt="HeroImg" />
            </div>
            <div className="Header__ScrollDownIcon">
              <img src={images.CircleArrow} alt=""/>
              <span>Scroll down</span>
            </div>
          </div>
        </div>
      </div>
     );
}

export default HeaderPage;