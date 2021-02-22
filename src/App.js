import React from 'react';
import Home from "./components/home-page/Home.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CoffeePage} from './components/coffee-page/CoffeePage.jsx';
import {AboutUsPage} from './components/about-us/AboutUsPage.jsx';
import {Menu} from './components/menu-page/Menu.jsx';
import {Footer} from './components/footer/Footer.jsx';
import {Contact} from './components/contact/Contact.jsx';

// import CartContainer from './components/cart-container/CartContainer.jsx';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route path='/cart' component={CartContainer}/> */}
        <Route path="/coffee" component={CoffeePage} />
        <Route path='/menu' component={Menu}/>
        <Route path='/aboutus' component={AboutUsPage} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </Router>
    
  )
}
export default App;