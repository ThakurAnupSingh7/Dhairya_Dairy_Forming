import React from 'react';
import './App.css';
import Menu from './Page/Menu';
import Home from './Page/Home';
import About from './Page/About';
import Blog from './Page/Blog';
import ContactUs from './Page/ContactUs';
import {BrowserRouter, Route, Switch,} from 'react-router-dom';
import Footer from './Page/footer';


function App() {
  return (
    <BrowserRouter>
    <div>
    <Menu></Menu> 

<Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contactus" component={ContactUs} />
    <Route path="/Blog" component={Blog} />
    </Switch>
    </div>
    <br/>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
