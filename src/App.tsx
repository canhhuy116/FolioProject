import React from 'react';
import './assets/styles/App.scss'
import images from './assets/images';

function App() {
  return (
    <div className="App">
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
            <img src={images.HeroBG} alt="HeroBG" className='Header__HeroBG' />
            <img src={images.HeroImg} alt="HeroImg" className='Header__HeroImg' />
            <div className="Header__ScrollDownIcon">
              <img src={images.CircleArrow} alt=""/>
              <span>Scroll down</span>
            </div>
          </div>
        </div>
      </div>
      <div className="WhoWeAre">
          {/* <div className="WhoWeAre__line">
          </div> */}
        <div className="WhoWeAre__shape3d">
          <img src={images.shape1} alt="shape 3d" className='shape3dIMG' />
          <div className='grid'>
            <div className="Headline">
              <img src={images.logoSymbol} alt="" className="Headline__logo" />
              <div className="Headline__content">
                <div className="Headline__content__tagline">
                  <span className="taglineNumber">
                    01
                  </span> 
                  <span className="taglineContent">
                    Who We Are
                  </span>
                </div>
                <h2 className="Headline__content__para">
                  We Make Designs that Lead and Inpire.
                </h2>
              </div>
              <div className="Headline__Arrow">
                <img src={images.leftNormal} alt="Left Arrow" />
                <img src={images.rightHover} alt="Right Arrow" />
              </div>
            </div>
            <div className="WhoWeAre__body">
              <ul className="WhoWeAre__body__timeLine">
                <li className="TimeLine-item">2017</li>
                <li className="TimeLine-item">2018</li>
                <li className="TimeLine-item">2019</li>
                <li className="TimeLine-item TimeLineCurrentYear">2020</li>
                <li className="TimeLine-item">2021</li>
              </ul>
              <div className="WhoWeAre__body__img">
                <img src={images.whoweareIMG} alt="Body img" />
              </div>
            </div>
            <div className="WhoWeAre__footer">
              <div className="WhoWeAre__footer__content">
                <div className="WhoWeAre__footer__content__main">
                  <h2 className="WhoWeAre__content__title">
                    A design team building a curated marketplace for UI designers.
                  </h2>
                  <p className="WhoWeAre__content__body">
                    4,404 curated design resources to energize your creative workflow. We're a growing family of 334,531 designers and makers from around the world
                  </p>
                </div>
                <button className="button-primary">
                  <span className="Recent-Works">Contact Us</span>
                </button>
              </div>
              <div className="Number">
                <h1 className="Number__head">
                  28
                </h1>
                <h6 className="Number__content">
                  Bigest Branding
                </h6>
              </div>
            <div/>
          </div>
          </div>
        </div>
      </div>
      <div className="Services">
        <div className="grid">
          <div className="Headline">
            <img src={images.logoSymbol} alt="" className="Headline__logo" />
            <div className="Headline__content">
              <div className="Headline__content__tagline">
                <span className="taglineNumber">
                02.
                </span> 
                <span className="taglineContent">
                  What We Do
                </span>
              </div>
              <h2 className="Headline__content__para">
                We Make Designs that Lead and Inpire.
              </h2>
            </div>
            <div className="Headline__Arrow">
              <img src={images.leftNormal1} alt="Left Arrow" />
              <img src={images.rightHover} alt="Right Arrow" />
            </div>
          </div>
          <div className="Services__Card">
            <div className='Services__Card_Box'>
              <img src={images.ServicesIcon1} alt="" className="Services__Card__icon" />
              <span className="Services__Card__name">
                Strategy
              </span>
              </div>
            <div className='Services__Card_Box Services__Card__Current'>
              <img src={images.ServicesIcon2} alt="" className="Services__Card__icon" />
              <span className="Services__Card__name">
                Branding
              </span>
              </div>
            <div className='Services__Card_Box'>
              <img src={images.ServicesIcon3} alt="" className="Services__Card__icon" />
              <span className="Services__Card__name">
                Interactive
              </span>
              </div>
            <div className='Services__Card_Box'>
              <img src={images.ServicesIcon4} alt="" className="Services__Card__icon" />
              <span className="Services__Card__name">
                Communicate
              </span>
              </div>
          </div>
          <div className="Services__Achievement">
            <img src={images.Phone} alt="Phone" className='ImgPhone' />
            <div className="Services__Achievement__content">
              <div className="Achievement__Headline">
                <div className="Achievement__Headline__Head">
                  <img src={images.logoSymbol} alt=""/>
                  <div className="Headline__content__tagline">
                    <span className="taglineNumber">
                    03.
                    </span> 
                    <span className="taglineContent">
                      Achievement
                    </span>
                  </div>
                </div>
                <h2 className="Headline__content__para">
                  A design team building a curated marketplace for UI designers.
                </h2>
              </div>
              <div className="Number">
                <h1 className="Number__head">
                  68
                </h1>
                <h6 className="Number__content">
                  😎    Successful Projects
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
