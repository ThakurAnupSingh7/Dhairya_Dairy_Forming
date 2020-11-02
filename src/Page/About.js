import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-about-img">
        <img
          src={process.env.PUBLIC_URL + "/img/about-about1.jpg"}
          className="img-about"
          alt="image1"
          width="100%"
          height="auto"
        ></img>
        <div className="onimg-text text-center text-white">
          <h2 className="">About Us</h2>
          <div className="badge badge-primary">
            <h4>Home // About Us </h4>
          </div>
        </div>
      </div>
      <br />

      {/* Welcome our Dairy */}
      <div className="card welcome-our-dairy">
        <div className="text-center">
          <h1 className="text-dark">Welcome To Our Farm!</h1>
          <img
            src={process.env.PUBLIC_URL + "/img/line4.jpg"}
            className="img-fluid rounded"
            alt="image2"
          ></img>
          <br />
          <br />
          <p>
            We bring to you best milk in its purest and most organic form.
            Weaving in the new technology, <br></br> with the age old art of
            milking, and bringing its product.
          </p>
        </div>
      </div>
      <br />

      {/* about our Dairy Form*/}
      <div className="card about-our-dairy-form">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/img/AboutMain.jpg"}
                className="img-fluid rounded"
                alt="image3"
              />
            </div>
            <div className="col-md-6">
              <h1>
                About Our <span className="text-primary">Dairy Farm</span>
              </h1>
              <img
                src={process.env.PUBLIC_URL + "/img/LineLight.png"}
                className="img-fluid rounded"
                alt="image4"
                width="50%"
                height="0"
              />
              <p>
                {" "}
                Dhairya Dairy Milk farm has been set up at Gorakhpur to
                demonstrate scientific methods of dairy farming. The project
                envisages encouraging the farmers to use high yielding animals
                and modern aids to increase milk production. <br></br>
                <br />
                Our Farm provides technical support to milk producers on
                Scientific Animal Husbandry practices to yield better product.{" "}
              </p>
            </div>
          </div>

          <div></div>
        </div>
      </div>
      <br />

      {/*Why Choose Us*/}
      <div className="card why-choose-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h1>Why Choose Us</h1>
              <img
                src={process.env.PUBLIC_URL + "/img/LineLight.png"}
                className="img-fluid rounded"
                alt="image4"
                width="50%"
                height="0"
              />
              <p>
                Dhaira Dairy sources a significant part of its requirement of
                liquid milk from dairy cooperatives and village level farmer
                centric organization. The farm is committed to uphold
                institutional structure that empower milk producers and farmers
                through processes that are equitable. <br></br> <br />
                Trust, Purity and Taste are the hallmarks of Dairya Dairy Farm.
                Dairya brings happiness to every individual witn its range
                offering pure, hygienic and adulteration-free high quality
                products which has been the strength, differentiator and
                heritage of the brand over years.
              </p>
            </div>
            <div className="col-lg-6 col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/img/home-why-choose3.jpg"}
                className="img-fluid rounded"
                alt="image1"
                width="100%"
                height="30px"
              />
            </div>
          </div>
        </div>
      </div>
      <br />

       {/*our team*/}
      <div className="jumbotron our-team">
        <div className="text-center">
          <h1 className="text-dark">Our Team</h1>
          <img
            src={process.env.PUBLIC_URL + "/img/line4.jpg"}
            className="rounded"
            alt="image2"
          ></img>
          <p className="para">
            Our Team mission is to have a strong commitment towards integrity,
            quality and creation of value for our clients. To deliver quality
            products meeting global standards.
          </p>
        </div>

        <div className="container">
          <div className="row ">
            <div className="col-md-3 m-auto">
              <div className="card">
                <img
                  src={process.env.PUBLIC_URL + "/img/dairy_team1.jpg"}
                  className="img-fluid rounded"
                  alt="image2"
                ></img>
                <h5 className="card-name">Jack Rayan</h5>
                <p className="card-ocupation">Dairy Former</p>
              </div>
            </div>
            <div className="col-md-3 m-auto">
              <div className="card">
                <img
                  src={process.env.PUBLIC_URL + "/img/dairy_team2.jpg"}
                  className="img-fluid rounded"
                  alt="image2"
                ></img>
                <h5 className="card-name">Jhon</h5>
                <p className="card-ocupation">Dairy Former</p>
              </div>
            </div>

            <div className="col-md-3 m-auto">
              <div className="card">
                <img
                  src={process.env.PUBLIC_URL + "/img/dairy_team3.jpg"}
                  className="img-fluid rounded"
                  alt="image2"
                ></img>
                <h5 className="card-name">James Rayan</h5>
                <p className="card-ocupation">Dairy Former</p>
              </div>
            </div>

            <div className="col-md-3 m-auto">
              <div className="card">
                <img
                  src={process.env.PUBLIC_URL + "/img/dairy_team4.jpg"}
                  className="img-fluid rounded"
                  alt="image2"
                ></img>
                <h5 className="card-name">Jacob Robert</h5>
                <p className="card-ocupation">Dairy Former</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
