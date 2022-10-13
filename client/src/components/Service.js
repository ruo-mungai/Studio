import React from "react";
import "./Main.css"


function Service() {
  return (
    <div>
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <span>Our Services</span>
            <h2>Our Services</h2>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-images"></i>
                </div>
                <h4 className="title"> Photograpy</h4>
                <p className="description">
                  Capturing the moment with crystal clear and attractive photos.
                  <br></br>
                  <br></br>
                  “There is one thing the photograph must contain, the humanity
                  of the moment.” — Robert Frank
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-camera-video"></i>
                </div>
                <h4 className="title"> Videography</h4>
                <p className="description">
                  Recording and making videos for your events.
                  <br></br>
                  <br></br>
                  “Filmmaking is a chance to live many lifetimes.” - Robert
                  Altman
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-broadcast"></i>
                </div>
                <h4 className="title"> Live Streaming</h4>
                <p className="description">
                  Air your events live and in realyime.
                  <br></br>
                  <br></br>
                  "I don't know where streaming will go in the future. The
                  analytics that we're seeing tell us that streaming is the next
                  big thing." --Jay-Z
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-mortarboard"></i>
                </div>
                <h4 className="title">Photograpy Training</h4>
                <p className="description">
                  Learn everything about photograpy from zero to advance level
                  and gain the skills to help you capture every moment
                  professionally
                  <br></br>
                  <br></br>
                  “Photography is a way of feeling, of touching, of loving. What
                  you have caught on film is captured forever… It remembers
                  little things, long after you have forgotten everything.” —
                  Aaron Siskind
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
}

export default Service
