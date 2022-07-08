import images from '../../assets/images/indexImages';
import './styleJob.scss';

function JobPage() {
    return ( 
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
     );
}

export default JobPage;