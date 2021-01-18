import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Component/Common/Header/Header'
import Footer from './Component/Common/Footer/Footer'
import Home from './Component/Home/Home'
import Kardstash from './Component/Kardstash/Kardstash';
import Ekikart from './Component/Ekikart/Ekikart.js'
import Kardstashloyalty from './Component/Kardstashloyalty/Kardstashloyalty.js'
import Digipointe from './Component/Digipointe/Digipointe.js'
import Ticketpointe from './Component/Ticketpointe/Ticketpointe.js'
import Taxipointe from './Component/Taxipointe/Taxipointe.js'
import Demandpointe from './Component/Demandpointe/Demandpointe.js'
import Revenuepointe from './Component/Revenuepointe/Revenuepointe.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/aos/dist/aos.css'
import './assets/css/main.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>    
          <Route exact path="/spacepointe">
            <Home />
          </Route>          
          <Route path="/kardstash">
            <Kardstash />
          </Route>
          <Route path="/ekikart">
            <Ekikart />
          </Route>
          <Route path="/kardstashloyalty">
            <Kardstashloyalty />
          </Route>
          <Route path="/digipointe">
            <Digipointe />
          </Route>
          <Route path="/ticketpointe">
            <Ticketpointe />
          </Route>
          <Route path="/taxipointe">
            <Taxipointe />
          </Route>
          <Route path="/demandpointe">
            <Demandpointe />
          </Route>
          <Route path="/revenuepointe">
            <Revenuepointe />
          </Route>
        </Switch>
        <Footer/>
      </Router>     
    </div>
  );
}

export default App;
