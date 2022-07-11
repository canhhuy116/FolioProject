import * as React from 'react';
import images from '../../assets/images/indexImages';
import './styleJob.scss';

function JobPage() {
  return (
    <div className="Job">
      <div className="grid">
        <div className="Headline">
          <img src={images.logoSymbol} alt="" className="Headline__logo" />
          <div className="Content">
            <div className="Content-Title">
              <span className="Content-Title__Number">05.</span>
              <span className="Content-Title__Caption">We are hiring</span>
            </div>
            <h2 className="Content__Text">Jobs</h2>
            <p className="Job-Text">
              Agency is a full-service agency, busy designing and building beautiful digital products, brands, and
              experiences.
            </p>
            <div className="ScrollDown">
              <img src={images.rightHover} alt="" />
              <span>Available jobs</span>
            </div>
          </div>
        </div>
        <div className="JobCards">
          <div className="JobCard">
            <div className="JobCard-Box">
              <h2 className="JobCard__JobName">Graphic Designer</h2>
              <span className="JobCard__YearExp">2 years experience</span>
            </div>
          </div>
          <div className="JobCard JobCard--Current">
            <div className="JobCard-Box">
              <h2 className="JobCard__JobName">Visual Designer</h2>
              <span className="JobCard__YearExp">2 years experience</span>
            </div>
          </div>
          <div className="JobCard">
            <div className="JobCard-Box">
              <h2 className="JobCard__JobName">Art Director</h2>
              <span className="JobCard__YearExp">2 years experience</span>
            </div>
          </div>
          <div className="JobCard">
            <div className="JobCard-Box">
              <h2 className="JobCard__JobName">Web Designer</h2>
              <span className="JobCard__YearExp">2 years experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPage;
