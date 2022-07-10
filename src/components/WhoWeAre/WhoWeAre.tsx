import images from '../../assets/images/indexImages';
import './styleWhoWeAre.scss';

function WhoWeArePage() {
    return ( 
      <div className="WhoWeAre">
          {/* <div className="WhoWeAre__line">
          </div> */}
        <div className="WhoWeAre__shape3d">
          <div className="shape3dIMG">
            <img src={images.shape1} alt="shape 3d" />
          </div>
          <div className='grid'>
            <div className="Headline">
              <img src={images.logoSymbol} alt="" className="Headline__logo" />
              <div className="Headline__content">
                <div className="Headline__content__tagline">
                  <span className="taglineNumber">
                    01.
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
                <div className="Headline__Arrow__Box">
                  <img src={images.leftNormal} alt="Left Arrow" />
                  <img src={images.rightHover} alt="Right Arrow" />
                </div>
                {/* Mobile */}
                <span className="CurrentYearMobile">2020</span>
                <img src={images.PathStroke} alt="" className='DownIconMobile' />
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
     );
}

export default WhoWeArePage;