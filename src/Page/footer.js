import React from "react";
import "./footer.css";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
 {/* <!-- Footer --> */}
<footer className="page-footer font-small unique-color-dark">

  <div className="footer-header">
    <div className="container">

      {/* <!-- Grid row--> */}
      <div className="row py-4 d-flex align-items-center">

        {/* <!-- Grid column --> */}
        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 className="mb-0">Get connected with us on social networks!</h6>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-6 col-lg-7 text-center text-md-right">

          {/* <!-- Facebook --> */}
          <a href="https://www.facebook.com/"  className="fb-ic">
            <i className="fab fa-facebook-f white-text mr-4"> </i>
          </a>
          {/* <!-- Twitter --> */}
          <a className="tw-ic" href="https://twitter.com/">
            <i className="fab fa-twitter white-text mr-4"> </i>
          </a>
          {/* <!-- Google +--> */}
          <a className="gplus-ic" href="https://www.google.com/">
            <i className="fab fa-google-plus-g white-text mr-4"> </i>
          </a>
          {/* <!--Linkedin --> */}
          <a className="li-ic" href="https://www.linkedin.com/">
            <i className="fab fa-linkedin-in white-text mr-4"> </i>
          </a>
          {/* <!--Instagram--> */}
          <a className="ins-ic"  href="https://www.instagram.com/">
            <i className="fab fa-instagram white-text"> </i>
          </a>

        </div>
        {/* <!-- Grid column --> */}

      </div>
      {/* <!-- Grid row--> */}

    </div>
  </div>

  {/* <!-- Footer Links --> */}
  <div className="container text-center text-md-left mt-5 center-text">

    {/* <!-- Grid row --> */}
    <div className="row mt-3">

      {/* <!-- Grid column --> */}
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

        {/* <!-- Content --> */}
        <h6 className="text-uppercase font-weight-bold">Company name</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
        <img src = {process.env.PUBLIC_URL + "/img/logo-footer.jpg"} alt="logo" />
        

      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

        {/* <!-- Links --> */}
        <h6 className="text-uppercase font-weight-bold">Products</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
        <p>
          <div>Milk</div>
        </p>
        <p>
          <div>Butter</div>
        </p>
        <p>
          <div>Curd</div>
        </p>
        <p>
          <div>cheese</div>
        </p>

        <p>
          <div>Others</div>
        </p>

      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

        {/* <!-- Links --> */}
        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
        <p>
        <Link to ="/" className="useful-links"> Home </Link>
        </p>
        <p>
        <Link to ="about" className="useful-links"> About Us </Link>
        </p>
           <p>
           <Link to ="Services" className="useful-links"> Services </Link>
        </p>
        <p>
        <Link to ="Gallery" className="useful-links"> Gallery </Link>
        </p>


        <p>
        <Link to ="contactus"  className="useful-links"> Contact Us </Link>
        </p>

      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        {/* <!-- Links --> */}
        <h6 className="text-uppercase font-weight-bold">Contact</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
        <p>
          <i className="fas fa-home mr-3"></i> SHEEHAPAR, SAHJANWA Gorakhpur, UP 273209, IN

</p>
        <p>
          <i className="fas fa-envelope mr-3"></i>caspmk@gmail.com</p>
        <p>
          <i className="fas fa-phone mr-3"></i>9794551773</p>
        <p>
          <i className="fas fa-phone mr-3"></i>9794551773</p>

      </div>
      {/* <!-- Grid column --> */}

    </div>
    {/* <!-- Grid row --> */}

  </div>
  {/* <!-- Footer Links --> */}



  {/* <!-- Copyright --> */}
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
  <a href="http://magathconsultants.com/">
     || Dhairya Dairy Form LLP ||</a> and 
   Designed && Developed By:
    <a href="http://magathconsultants.com/">
     || Magath Consultants ||</a>
  </div>
  {/* <!-- Copyright --> */}

</footer>
{/* <!-- Footer --> */}


<div class="brand">
<img src = {process.env.PUBLIC_URL + "/img/footer-brand1.jpg"} alt="logo" width="50px" />
<img src = {process.env.PUBLIC_URL + "/img/footer-brand2.jpg"} alt="logo"  width="50px"/>
<img src = {process.env.PUBLIC_URL + "/img/footer-brand3.jpg"} alt="logo" width="50px" />
<img src = {process.env.PUBLIC_URL + "/img/footer-brand4.jpg"} alt="logo" width="50px" />
<img src = {process.env.PUBLIC_URL + "/img/footer-brand5.jpg"} alt="logo" width="50px" />
<img src = {process.env.PUBLIC_URL + "/img/footer-brand6.jpg"} alt="logo" width="50px" />
<img src = {process.env.PUBLIC_URL + "/img/footer-brand7.jpg"} alt="logo" width="50px" />
</div>

    </div>
  );

  

}

export default Footer;