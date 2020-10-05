import React from 'react';
import './App.css';
import Menu from './Page/Menu';
import Home from './Page/Home';
import About from './Page/About';
import ContactUs from './Page/ContactUs';
import {BrowserRouter, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div>
    <Menu></Menu> 

<Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contactus" component={ContactUs} />
    
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
