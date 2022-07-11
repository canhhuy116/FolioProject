import * as React from 'react';
import images from '../../assets/images/indexImages';
import './styleWorks.scss';

function WorksPage() {
  return (
    <div className="Works">
      <div className="grid">
        <div className="Headline">
          <img src={images.logoSymbol} alt="" className="Headline__logo" />
          <div className="Content">
            <div className="Content-Title">
              <span className="Content-Title__Number">04.</span>
              <span className="Content-Title__Caption">Famous Projects</span>
            </div>
            <h2 className="Content__Text">Our Partnerships</h2>
            <p className="Works__Text">
              Agency is a full-service agency, busy designing and building beautiful digital products, brands, and
              experiences.
            </p>
          </div>
          <button type="button" className="button--primary">
            <span className="Recent-Works">Contact Us</span>
          </button>
        </div>
      </div>
      <div className="Works__featuredWork">
        <div className="featureWork-Box">
          <div className="featuredWorkIMG">
            <img src={images.FeatureWork} alt="" />
            <div className="ArrowRight">
              <img src={images.rightHover} alt="" />
            </div>
            <div className="viewButton">
              <img src={images.viewButton} alt="" />
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="FeatureWork">
            <div className="FeatureWork__Btn">Featured Product</div>
            <div className="FeatureWork-Content">
              <div className="FeatureWork-Content__title">Sapiens: The Free Character Builder App.</div>
              <div className="FeatureWork-Content__para">
                Beautiful library of modular, component-based character illustrations free to use for all your personal
                or client projects.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="PortFolios">
          <div className="PortFolio PortFolio--Right">
            <h2 className="PortFolio__title">Bento Vol.2</h2>
            <div className="PortFolio-Box">
              <img src={images.PortFolio1} alt="" className="PortFolio-Box__img" />
              <img src={images.rightHover} alt="" className="PortFolio-Box__Arrow" />
            </div>
            <p className="PortFolio__content">
              Agency is a full-service agency, busy designing and building beautiful digital products, brands, and
              experiences.
            </p>
          </div>
          <div className="PortFolio PortFolio2">
            <h2 className="PortFolio__title">Bento 3D Illustration</h2>
            <div className="PortFolio-Box">
              <img src={images.PortFolio2} alt="" className="PortFolio-Box__img" />
              <img src={images.rightHover} alt="" className="PortFolio-Box__Arrow" />
            </div>
            <p className="PortFolio__content">
              Agency is a full-service agency, busy designing and building beautiful digital products, brands, and
              experiences.
            </p>
          </div>
          <div className="PortFolio PortFolio3 PortFolio--Right">
            <h2 className="PortFolio__title">Bento Vol.3</h2>
            <div className="PortFolio-Box">
              <img src={images.PortFolio3} alt="" className="PortFolio-Box__img" />
              <img src={images.rightHover} alt="" className="PortFolio-Box__Arrow" />
            </div>
            <p className="PortFolio__content">
              Agency is a full-service agency, busy designing and building beautiful digital products, brands, and
              experiences.
            </p>
          </div>
          <div className="PortFolio PortFolio4">
            <h2 className="PortFolio__title">Sapiens: Man</h2>
            <div className="PortFolio-Box">
              <img src={images.PortFolio4} alt="" className="PortFolio-Box__img" />
              <img src={images.rightHover} alt="" className="PortFolio-Box__Arrow" />
            </div>
            <p className="PortFolio__content">
              Agency is a full-service agency, busy designing and building beautiful digital products, brands, and
              experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorksPage;
