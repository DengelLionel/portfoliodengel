import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SobreMi from './Pages/SobreMi/SobreMi';
import './css/App.css';
import PortafolioHome from './Pages';
import DesarrolloWeb from "./Pages/DesarrolloWeb"
import DesarrolloMovil from "./Pages/DesarrolloMovil"
import DiseñoGrafico from "./Pages/DiseñoGrafico"
import { Provider } from 'react-redux';
import store from "./redux/store";
import {useEffect } from "react";
import ReactGA from "react-ga"


function App() {
  const TRACKING_ID="UA-243853580-1";
  ReactGA.initialize(TRACKING_ID)
  useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search)
},[])
  

  return (
    
    <section className='' onContextMenu={(e)=>e.preventDefault()}>
       
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<PortafolioHome/>}/>
       
          <Route  path="/SobreMi" index element={<SobreMi/>}/>
          <Route  path="/desarrolloweb"  element={<DesarrolloWeb/>}>

    
          </Route>
          <Route  path="/desarrollomovil"  element={<DesarrolloMovil/>}/>
          <Route  path="/disenografico"  element={<DiseñoGrafico/>}/>
          
        </Route>

      </Routes>
      
      </BrowserRouter>
      </Provider>

    </section>
    
  );
}

export default App;
