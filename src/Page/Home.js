import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={process.env.PUBLIC_URL + "/img/home-slider2.jpg"}
              className="carousel-img"
              alt="pic1"
              width="100%"
              height="630"
            />
            <div className="carousel-caption">
              <h1>
                Healthy Milk For <br />
                Good Health
              </h1>
              <img
                src={process.env.PUBLIC_URL + "/img/line.png"}
                alt="line"
                className="line"
                width="auto"
              />
              <p>
                Milk is a nutrient-rich liquid food produced in the mammary
                glands of mammals. It is the primary source of nutrition <br />
                for infant mammals (including humans who are breastfed) before
                they are able to digest other types of food.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + "/img/home-slider1.jpg"}
              className="carousel-img"
              alt="pic2"
              width="100%"
              height="630"
            />
            <div className="carousel-caption">
              <h1>
                Healthy butter For <br />
                Good Health
              </h1>
              <img
                src={process.env.PUBLIC_URL + "/img/line.png"}
                alt="line"
                className="line"
                width="auto"
              />
              <p>
                Butter is a dairy product made from the fat and protein
                components of milk or cream. It is a <br />
                semi-solid emulsion at room temperature, consisting of
                approximately 80% butterfat.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + "/img/home-slider3.jpg"}
              className="carousel-img"
              alt="pic3"
              width="100%"
              height="630"
            />
            <div className="carousel-caption">
              <h1>
                Healthy Milk For <br />
                Good Health
              </h1>
              <img
                src={process.env.PUBLIC_URL + "/img/line.png"}
                alt="line"
                className="line"
                width="auto"
              />
              <p>
                Milk is a nutrient-rich liquid food produced in the mammary
                glands of mammals. It is the primary source of nutrition <br />
                for infant mammals (including humans who are breastfed) before
                they are able to digest other types of food.
              </p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
      <br />
      {/* Welcom to our dairy */}

      <div className="row mr-0 back-1">
        <div className="col-md-12">
          <div className="Main-text">
            <h2>Welcome To Our Farm</h2>
            <span className="bottom-line"></span>
          </div>
          <p className="Main-part1">
            Here you will find a wide range of healthy and fresh dairy products
            that were proudly produced at our
            <br /> farm by our farmers and cows. Welcome to Jacksons!
          </p>
        </div>
      </div>
      <div className="container img-cont">
        <div className="col-md-12">
          <div className="main-2">
            <img
              src={process.env.PUBLIC_URL + "/img/logo.jpg"}
              alt="logo"
              width="120"
              height="90"
            />
          </div>
        </div>
      </div>

      {/****************  Card *************************/}
<div className="Card-details">
      <ul className="cards">
        <li className="cards__item">
          <div className="card">
            <div className="card__image card__image--fence"></div>
            <div className="card__content">
              <div className="card__title">Our Dairy Farm</div>
              <p className="card__text">
                The Dhairya Dairy is a nonprofit funded by dairy farm families
                of the UP east. We work diligently with dairy farmers, schools,
                sports teams, health professionals, local organizations, state
                leaders, the media and the public to promote dairy foods and
                knowledge about the dairy industry.{" "}
              </p>
              <button className="btn btn--block card__btn">
                DISCOVER HISTORY
              </button>
            </div>
          </div>
        </li>
        <li className="cards__item">
          <div className="card">
            <div className="card__image card__image--river"></div>
            <div className="card__content">
              <div className="card__title">Meet Our Cows</div>
              <p className="card__text">
                Dairy farmers know that healthy, happy cows produce more
                high-quality milk so the animals’ well-being is a farmer’s top
                priority.
              </p>
              <button className="btn btn--block card__btn">VIEW COWS</button>
            </div>
          </div>
        </li>
        <li className="cards__item">
          <div className="card">
            <div className="card__image card__image--record"></div>
            <div className="card__content">
              <div className="card__title">Our Organic Food</div>
              <p className="card__text">
                Dairy farmers strive every day to produce wholesome milk and
                milk products that your family can feel good about eating.{" "}
              </p>
              <button className="btn btn--block card__btn">SHOP NOW</button>
            </div>
          </div>
        </li>
      </ul>
      </div>
      {/* *****************About us****************** */}
      <div className="about">
      <div className="row mr-0">
        <div className="col-md-12">
          <div className="Main-text">
            <h2>About Us</h2>
            <span className="bottom-line"></span>
          </div>
        </div>
      </div>
      <div className="row mr-0 pdd">
        <div className="col-md-12">
          <div className="row ">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="row ">
                <div className="col-xl-6 about-img"></div>
                <div className="col-xl-6  about-content">
                  <div className="tile" id="tile-1">
                    {/* Nav tabs  */}
                    <ul className="nav nav-tabs nav-justified" role="tablist">
                      <div className="slider"></div>
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          <i class="fas fa-home"></i> Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#profile"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          <i class="fas fa-id-card"></i> Profile
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="contact-tab"
                          data-toggle="tab"
                          href="#contact"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          <i class="fas fa-map-signs"></i> Contact
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="setting-tab"
                          data-toggle="tab"
                          href="#setting"
                          role="tab"
                          aria-controls="setting"
                          aria-selected="false"
                        >
                          <i class="fas fa-cogs"></i> Settings
                        </a>
                      </li>
                    </ul>

                    {/* Tab panes  */}
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="text-center">
                          <h2>Starting a Farm 1</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Praesent vestibulum molestie lacus. Aenean
                            nonummy hendrerit mauris. Phasellus porta. Fusce
                            suscipit varius mi. Cum sociis natoque penatibus et
                            magnis dis parturient montes.
                          </p>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div className="text-center">
                          <h2>Starting a Farm 2</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Praesent vestibulum molestie lacus. Aenean
                            nonummy hendrerit mauris. Phasellus porta. Fusce
                            suscipit varius mi. Cum sociis natoque penatibus et
                            magnis dis parturient montes.
                          </p>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="contact"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                      >
                        <div className="text-center">
                          <h2>Starting a Farm 3</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Praesent vestibulum molestie lacus. Aenean
                            nonummy hendrerit mauris. Phasellus porta. Fusce
                            suscipit varius mi. Cum sociis natoque penatibus et
                            magnis dis parturient montes.
                          </p>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="setting"
                        role="tabpanel"
                        aria-labelledby="setting-tab"
                      >
                        <div className="text-center">
                          <h2>Starting a Farm 4</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Praesent vestibulum molestie lacus. Aenean
                            nonummy hendrerit mauris. Phasellus porta. Fusce
                            suscipit varius mi. Cum sociis natoque penatibus et
                            magnis dis parturient montes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
      </div>
      <br/>

{/* ******Why Choose Us********* */}
   <div className="why-chooseus-part">  
<div className="container">
       <div className="row">
           <div className="col-md-6 why-choosse-us">
           <h3>why choose us</h3>
           <img
                src={process.env.PUBLIC_URL + "/img/line2.png"}
                alt="line"
                className="line"
                width="auto"
              />
             
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
     temporcididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
     , quis nostrud exercitatiamco laboris nisi ut aliquip ex ea commodo consequat. </p>

<p>Duis aute irure dolor in repreheenderit in voluptate velit esse cillum dolore  
  fugiat nulla pariatur. Excepteur sint occaecaeeiat cupidatat</p>

  <ul>
							<li>
								<p><span><i class="fa fa-angle-right" aria-hidden="true"></i></span>Expert &amp; Professional Farm</p>
							</li>
							<li>
								<p><span><i class="fa fa-angle-right" aria-hidden="true"></i></span>We are Award Winning Firm</p>
							</li>
							<li>
								<p><span><i class="fa fa-angle-right" aria-hidden="true"></i></span>Fully Satisfaction Guarantee</p>
							</li>
							<li>
								<p><span><i class="fa fa-angle-right" aria-hidden="true"></i></span>80 + Successfull Projects done</p>
							</li>
						</ul>

           </div>

           <div className="col-md-6">
            <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={process.env.PUBLIC_URL + "/img/home-why-choose1.jpg"}
             class="carousel-2-image"
              alt="pic1"
              width="100%"
              height="500px"
            />
            </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + "/img/home-why-choose2.jpg"}
              class="carousel-2-image"
              alt="pic2"
              width="100%"
              height="500px"
            />
              </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + "/img/home-why-choose3.jpg"}
              class="carousel-2-image"
              alt="pic3"
              width="100%"
              height="500px"
            />
            </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
         
           </div>

           </div>
           </div> 
           </div> 

    </div>
  );
};

export default Home;
