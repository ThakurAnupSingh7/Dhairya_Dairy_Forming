import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom'

const Menu = () =>{
    return(
        <div>
            <nav className="navstyle">
            
         <ul>
             <li className="space"></li>
             <li className="logo"><img src = {process.env.PUBLIC_URL + "/img/logo.jpg"} alt="logo" width="120" height="90" /></li>
           <li> <Link to ="/"> Home </Link></li>  
           <li> <Link to ="about"> About Us </Link></li>
           <li> <Link to ="Services"> Services </Link></li> 
           <li> <Link to ="Gallery"> Gallery </Link></li>  
           <li> <Link to ="Blog"> Blog </Link></li> 
           <li> <Link to ="Pages">Pages </Link></li> 
           <li> <Link to ="contactus"> Contact Us </Link></li>
          <li></li>
           <li><i class="fa fa-search"></i></li>
           <li>|</li>
           <li><i class="fa fa-shopping-bag"></i></li>
           <li></li>
           <li></li>
           <li class="appointment_btn">appointment</li>

             </ul>

             </nav>   
        </div>
    );
}

export default Menu;