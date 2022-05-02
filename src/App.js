import './App.css';
import BarPlay from './components/BarPlay';
import LateralMenu from './components/LateralMenu';
import LateralConfig from './components/LateralConfig';
import MainContent from './components/MainContent';
import BarReproduction from './components/BarReproduction';
import { Route, Routes, Router } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div className="bg-dark container-fluid p-0 d-flex justify-content-center flex-column">
        <div className="row w-100 mx-0">
          <div className="col-2 d-none d-md-block">
            <LateralMenu></LateralMenu>
          </div>
          <div className="col-12 col-md-8 p-0 bg-black text-white">
            <Router>
              <Routes>
                <Route path='/' element={<MainContent />}>
                </Route>
                <Route path='/search' element={<p>asd</p>}>
                </Route>
              </Routes>
            </Router>
          </div>
          <div className="col-2 text-white bg-dark d-none d-md-block px-0">
            <LateralConfig></LateralConfig>
          </div>
        </div>
        <div className="d-inline-flex bg-black justify-content-center">
          <BarPlay></BarPlay>
        </div>
        <div className='bg-black'>
          <BarReproduction></BarReproduction>
        </div>
      </div>

    </div>
  );
}

export default App;