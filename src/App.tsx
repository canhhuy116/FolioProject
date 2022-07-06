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
      <div className="Works">
        <div className='grid'>
          <div className="Headline">
            <img src={images.logoSymbol} alt="" className="Headline__logo" />
              <div className="Headline__content">
                <div className="Headline__content__tagline">
                  <span className="taglineNumber">
                  04.
                  </span> 
                  <span className="taglineContent">
                    Famous Projects
                  </span>
                </div>
                <h2 className="Headline__content__para">
                  Our Partnerships
                </h2>
                <p className="Work__Headline__content">
                  Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
                </p>
              </div>
              <button className="button-primary">
                <span className="Recent-Works">
                  Contact Us
                </span>
              </button>
          </div>
          <div className="Works__featuredWork">
            <img src={images.FeatureWork} alt="" className='featuredWorkIMG' />
            <div className="Works__featuredWork__main">
              <div className="featuredWork__main__feature">
                Featured Product
              </div>
              <div className="featuredWork__main__content">
                <div className="featuredWork__main__content__title">
                  Sapiens: The Free Character Builder App.
                </div>
                <div className="featuredWork__main__content__para">
                  Beautiful library of modular, component-based character illustrations free to use for all your personal or client projects.
                </div>
              </div>
            </div>
          </div>
          <div className='Works__PortFolio__Box'>
            <div className="Works__PortFolio Works__PortFolio__Right">
              <h2 className="PortFolio__title">
                Bento Vol.2
              </h2>
              <div className="PortFolio__Box">
                <img src={images.PortFolio1} alt="" className="PortFolio__Box__img" />
                <img src={images.rightHover} alt="" className="PortFolio__Box__Arrow" />
              </div>
              <p className="PortFolio__content">
                Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
              </p>
            </div>
            <div className="Works__PortFolio Works__PortFolio2">
              <h2 className="PortFolio__title">
                Bento 3D Illustration
              </h2>
              <div className="PortFolio__Box">
                <img src={images.PortFolio2} alt="" className="PortFolio__Box__img" />
                <img src={images.rightHover} alt="" className="PortFolio__Box__Arrow" />
              </div>
              <p className="PortFolio__content">
                Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
              </p>
            </div>
            <div className="Works__PortFolio Works__PortFolio3 Works__PortFolio__Right">
              <h2 className="PortFolio__title">
                Bento Vol.3
              </h2>
              <div className="PortFolio__Box">
                <img src={images.PortFolio3} alt="" className="PortFolio__Box__img" />
                <img src={images.rightHover} alt="" className="PortFolio__Box__Arrow" />
              </div>
              <p className="PortFolio__content">
                Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
              </p>
            </div>
            <div className="Works__PortFolio Works__PortFolio4">
              <h2 className="PortFolio__title">
                Sapiens: Man
              </h2>
              <div className="PortFolio__Box">
                <img src={images.PortFolio4} alt="" className="PortFolio__Box__img" />
                <img src={images.rightHover} alt="" className="PortFolio__Box__Arrow" />
              </div>
              <p className="PortFolio__content">
                Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="CTA">
        <img src={images.HeroBG} alt="" className="CTA__maskImg" />
        <img src={images.PhoneIllustration} alt="" className="CTA__phoneImg" />
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
      <div className="Job">
        <div className="grid">
          <div className="Headline">
            <img src={images.logoSymbol} alt="" className="Headline__logo" />
            <div className="Headline__content">
              <div className="Headline__content__tagline">
                <span className="taglineNumber">
                05.
                </span> 
                <span className="taglineContent">
                  We are hiring
                </span>
              </div>
              <h2 className="Headline__content__para">
                Jobs
              </h2>
              <p className="Work__Headline__content">
                Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
              </p>
              <div className="ScrollDown">
                <img src={images.rightHover} alt="" />
                <span>Available jobs</span>
              </div>
            </div>
          </div>
          <div className="JobsCard">
            <div className="JobCard__Box">
              <div className="JobCard__content">
                <h2 className="JobName">
                  Graphic Designer
                </h2>
                <span className="YearExperienceJob">
                  2 years experience
                </span>
              </div>
            </div>
            <div className="JobCard__Box JobCard__Box__Current">
              <div className="JobCard__content">
                <h2 className="JobName">
                  Visual Designer
                </h2>
                <span className="YearExperienceJob">
                  2 years experience
                </span>
              </div>
            </div>
            <div className="JobCard__Box">
              <div className="JobCard__content">
                <h2 className="JobName">
                  Art Director
                </h2>
                <span className="YearExperienceJob">
                  2 years experience
                </span>
              </div>
            </div>
            <div className="JobCard__Box">
              <div className="JobCard__content">
                <h2 className="JobName">
                  Web Designer
                </h2>
                <span className="YearExperienceJob">
                  2 years experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              Let’s talk about your next project
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
    </div>
  );
}

export default App;
