import React from 'react';
import './App.css';
import Menu from './Page/Menu';
import Home from './Page/Home';
import About from './Page/About';
import Blog from './Page/Blog';
import Gallery from './Page/gallery';
import ContactUs from './Page/ContactUs';
import {BrowserRouter, Route, Switch,} from 'react-router-dom';
import Footer from './Page/footer';
import App1 from './Page/ScrolledNavBar';

import ScrollToTop from './Page/ScrolledToTop'


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <div>
    <Menu></Menu> 

<Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contactus" component={ContactUs} />
    <Route path="/Blog" component={Blog} />
    <Route path="/Gallery" component={Gallery} />
    </Switch>
    </div>
    <br/>
    <Footer></Footer>
    <App1/>
    </BrowserRouter>
  );
}

export default App;
