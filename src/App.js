import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SobreMi from './Pages/SobreMi/SobreMi';
import './css/App.css';
import PortafolioHome from './Pages';

import DesarrolloWeb from "./Pages/DesarrolloWeb"
import DesarrolloMovil from "./Pages/DesarrolloMovil"
import DiseñoGrafico from "./Pages/DiseñoGrafico"
import { Provider } from 'react-redux';
import store from "./redux/store";
import Backend from "./Pages/DesarrolloWeb/backend";
import Frontend from "./Pages/DesarrolloWeb/frontend";
function App() {
 
  

  return (
    
    <div className='app' onContextMenu={(e)=>e.preventDefault()}>
       
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<PortafolioHome/>}/>
       
          <Route  path="/SobreMi" index element={<SobreMi/>}/>
          <Route  path="/desarrolloweb"  element={<DesarrolloWeb/>}>
          <Route path='frontend' element={<Frontend/>}/>
            <Route path='backend'element={<Backend/>}/> 
          </Route>
          <Route  path="/desarrollomovil"  element={<DesarrolloMovil/>}/>
          <Route  path="/disenografico"  element={<DiseñoGrafico/>}/>
          
        </Route>

      </Routes>
      
      </BrowserRouter>
      </Provider>

    </div>
    
  );
}

export default App;
