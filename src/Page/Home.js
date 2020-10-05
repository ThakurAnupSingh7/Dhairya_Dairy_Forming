import React from 'react';
import './Home.css';


const Home = () =>{
    return(
        <div>
        

        <div id="demo" className="carousel slide" data-ride="carousel">
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div className="carousel-inner">
    <div className="carousel-item active">
       <img src = {process.env.PUBLIC_URL + "/img/home-slider2.jpg"} className="carousel-img" alt="pic1" width="100%" height="630" />
      <div className="carousel-caption">
        <h1>Healthy Milk For <br/>Good Health</h1>
        <img src = {process.env.PUBLIC_URL + "/img/line.png"} alt="line" className="line"  width="auto" />
        <p>Milk is a nutrient-rich liquid food produced in the mammary glands
             of mammals. It is the primary source of nutrition <br/>for infant mammals
              (including humans who are breastfed) before they are able to digest 
              other types of food.</p>
      </div>   
    </div>
    <div className="carousel-item">
      <img src={process.env.PUBLIC_URL + "/img/home-slider1.jpg"} className="carousel-img" alt="pic2" width="100%" height="630"/>
      <div className="carousel-caption">
      <h1>Healthy butter For <br/>Good Health</h1>
      <img src = {process.env.PUBLIC_URL + "/img/line.png"} alt="line" className="line"  width="auto" />
        <p>Butter is a dairy product made from the fat and protein components of milk or cream.
             It is a <br/>semi-solid emulsion at room temperature,
             consisting of approximately 80% butterfat.</p>
      </div>   
    </div>
    <div className="carousel-item">
    <img src = {process.env.PUBLIC_URL + "/img/home-slider3.jpg"} className="carousel-img" alt="pic3" width="100%" height="630" />
      <div className="carousel-caption">
      <h1>Healthy Milk For <br/>Good Health</h1>
      <img src = {process.env.PUBLIC_URL + "/img/line.png"} alt="line" className="line"  width="auto" />
      <p>Milk is a nutrient-rich liquid food produced in the mammary glands
             of mammals. It is the primary source of nutrition <br/>for infant mammals
              (including humans who are breastfed) before they are able to digest 
              other types of food.</p>
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

        
        </div>
    )
}

export default Home;