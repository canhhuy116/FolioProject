import images from '../../assets/images/indexImages';
import './styleWorks.scss';

function WorksPage() {
    return ( 
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
        </div>
        <div className="Works__featuredWork">
          <div className="featureWork__Box">
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
          <div className='grid'>
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
        </div>
        <div className="grid">
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
     );
}

export default WorksPage;