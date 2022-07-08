import images from '../../assets/images/indexImages';
import './styleServices.scss';

function ServicesPage() {
  return (
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
        <div className="Services__Cards">
          <div className="Services__Card">
            <div className='Services__Card_Box'>
            </div>
            <div className='Services__Card_Box'>
            </div>
            <div className='Services__Card_Box'>
            </div>
            <div className='Services__Card_Box'>
            </div>
          </div>
          <div className="Services__Card content">
            <div className='Services__Card_Box'>
              <img src={images.ServicesIcon1} alt="" className="Services__Card__icon" />
              <span className="Services__Card__name">
                Strategy
              </span>
            </div>
            <div className='Services__Card_Box Services__Card_Box--active'>
              <div className="Services__Card__Current">
                <img src={images.ServicesIcon2} alt="" className="Services__Card__icon" />
                <span className="Services__Card__name">
                  Branding
                </span>
              </div>
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
        </div>
        <div className="Services__Achievement">
          <div className="ImgPhone">
            <img src={images.Phone} alt="Phone" />
          </div>
          <div className="Services__Achievement__content">
            <div className="Achievement__Headline">
              <div className="Achievement__Headline__Head">
                <img src={images.logoSymbol} alt="" />
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
  );
}

export default ServicesPage;