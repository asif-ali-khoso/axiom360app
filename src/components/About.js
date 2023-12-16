import "./About.css";

function About() {
  return (
    <div className="About_us justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <h1>About Us</h1>
            <h6 className="text-white">What We Do</h6>
            <div className="Box_about">
              <p id="text_about">
                Invinci helps you digitalize your businesses and grow them into
                international brands. Being one of the leading IT companies, our
                history is full of success stories. We are a hub of the creative
                brains in the tech industry who offer powerful digital solutions
                that satisfy today’s needs and unlock opportunities for
                tomorrow. Since the launch of this organization, we have only
                made satisfied customers with our client-first policy. We
                provide our customers with everything they need for a profitable
                online presence. Whether you are a start-up, planning to emerge
                as a big brand, or an established firm, you will always find us
                being a helping hand with our IT solutions.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="container about_img">
              {/* Your existing triangle divs */}
              <div className="triangle">
                <div></div>
              </div>
              <div className="triangle">
                <div></div>
              </div>
              <div className="triangle">
                <div></div>
              </div>
              <div className="triangle">
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="getstart_section">
          <div className="row">
            <div className="col-lg-10">
              <h6>Let’s Get Started</h6>
              <p id="text_letstarted">
                Lorem ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum<br /> has been the industry’s standard dummy.
              </p>
            </div>
            <div className="col-lg-2">
              <br />
              <div className="d-flex align-items-center">
                <button className="learn-more-abbr">
                  <span className="text">Learn More</span>
                </button>
                <span id="lineAbout"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
