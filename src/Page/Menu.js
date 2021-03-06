import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom'

const Menu = () =>{
    return(
        <div>
            <nav className="navstyle">
            
         <ul>
             <li className="space"></li>
             <li className="logo"><img src = {process.env.PUBLIC_URL + "/img/logo.jpg"} alt="logo" className="logo-img" /></li>
           <li> <Link to ="/"> Home </Link></li>  
           <li> <Link to ="about"> About Us </Link></li>
           {/* <li> <Link to ="Services"> Services </Link></li>  */}
           <li> <Link to ="Gallery"> Gallery </Link></li>  
           <li> <Link to ="Blog"> Blog </Link></li> 
           {/* <li> <Link to ="Pages">Pages </Link></li>  */}
           <li> <Link to ="contactus"> Contact Us </Link></li>
          <li></li>
           <li className="icon"><i class="fa fa-search"></i></li>
           <li className="icon">|</li>
           <li className="icon"><i class="fa fa-shopping-bag"></i></li>
           <li></li>
           <li></li>
           <li ><Link to ="contactus"><span class="appointment_btn">appointment</span></Link></li>

             </ul>

             </nav>   
        </div>
    );
}

export default Menu;