import React from "react";
import educationImg from "../../assets/images/education.svg";

function Education() {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">
        {/* Image column */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <img src={educationImg} alt="Education" className="img-fluid" />
        </div>

        {/* Text Column */}
        <div className="col-12 col-md-6">
          <h2>Free and open market education</h2>
          <p className="text-muted mt-3">
            Varsity, the largest online stock market education book in the
            world, covering everything from the basics to advanced trading.
          </p>
          <p className="text-muted mt-3">
            Learn at your own pace with free courses, tutorials, and exercises
            designed for all levels.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
