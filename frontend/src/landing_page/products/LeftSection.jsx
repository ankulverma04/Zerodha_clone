import React from "react";
import appstoreImg from '../../assets/images/appstoreBadge.svg'
import googleplayImg from '../../assets/images/googlePlayBadge.svg'

function LeftSection({
  imageUrl,
  productname,
  productDiscription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
 return (
  <div className="container">
    <div className="row align-items-center justify-content-center">

      <div className="col-12 col-sm-5 p-4 text-center">
        <img 
          src={imageUrl} 
          alt="" 
          className="img-fluid"
        />
      </div>
      <div className="col-sm-1"></div>

      <div className="col-12 col-sm-4 p-4 text-center text-sm-start">
        <h2>{productname}</h2>
        <p>{productDiscription}</p>

        <div className="d-flex gap-5 justify-content-center justify-content-sm-start mb-3">
          <a href={tryDemo}>Try Demo →</a>
          <a href={learnMore}>Learn More →</a>
        </div>

        <div className="d-flex gap-3 justify-content-center justify-content-sm-start">
          <a href={googlePlay} >
            <img src={googleplayImg} alt="" className="img-fluid" style={{maxWidth:"140px"}}/>
          </a>
          <a href={appStore}>
            <img src={appstoreImg} alt="" className="img-fluid" style={{maxWidth:"140px"}}/>
          </a>
        </div>

      </div>

    </div>
  </div>

  
);
}

export default LeftSection;
