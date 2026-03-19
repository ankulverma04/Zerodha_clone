import React from "react";
import Hero from "./Hero";
import Team from "./Team";
function AboutPage() {
  return (
    <>
      <div>
        <div className="row justify-content-center mt-5 pt-5 text-muted text-center">
          <div className="col-sm-6 mt-5">
            <h3 className="AboutHeading mb-5">
              We pioneered the discount broking model in India. <br />
              Now, we are breaking ground with our technology.
            </h3>
          </div>
        </div>
      </div>
      <hr className="w-75 mx-auto text-muted" />
      <Hero />
      <Team />
    </>
  );
}

export default AboutPage;
