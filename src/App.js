import './App.css';
import BarPlay from './components/BarPlay';
import LateralMenu from './components/LateralMenu';
import LateralConfig from './components/LateralConfig';
import MainContent from './components/MainContent';
import Profile from './components/Profile';
import BarReproduction from './components/BarReproduction';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import BarTop from "./components/BarTop";
import Library from './components/Library';
import { useState } from 'react';
import {ToastContainer,toast} from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const styles = {
    container: {
      height: '100vh'
    }
  }

  const [library, setLibrary] = useState([])
  const [icon, setIcon] = useState(false)
  const [clicked, setClicked] = useState(true)

  const handleChangeIconPlay = () => {
    setClicked(!clicked)
  }

  const notifyAdd = () => {
    toast.success("Album añadido", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 5000
    })
  }

  const notifyRemove = () => {
    toast.error("Album removido", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 5000
    })
  }

  const notifyEditInfo = () => {
    toast.info("Informacion modificada", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 5000
    })
  }

  return (
    <div className="App">
      <div className="bg-dark container-fluid p-0 d-flex justify-content-center flex-column" style={styles.container}>
        <div className="row w-100 mx-0">
          <BrowserRouter>
            <div className="col-2 d-none d-md-block">
              <LateralMenu></LateralMenu>
            </div>
            <div className="col-12 col-md-8 p-0 bg-black text-white">
              <BarTop></BarTop>

              <Routes>

                <Route path='/' element={<MainContent notifyAdd={notifyAdd} library={library} setLibrary={setLibrary}></MainContent>}></Route>
                <Route path='/profile/*' element={<Profile notifyEditInfo={notifyEditInfo} library={library}></Profile>}></Route>
                <Route path='/library/*' element={<Library notifyRemove={notifyRemove} library={library} setLibrary={setLibrary}></Library>}></Route>
                <Route path='*' element={<Navigate to='/' />}></Route>

              </Routes>
                
            </div>
          </BrowserRouter>
          <div className="col-2 text-white bg-dark d-none d-md-block px-0">
            <LateralConfig></LateralConfig>
          </div>
        </div>
        <div className="d-inline-flex bg-black justify-content-center">
          <BarPlay icon={icon}
            setIcon={setIcon}
            clicked={clicked}
            setClicked={setClicked}
            handleChangeIconPlay={handleChangeIconPlay}
          ></BarPlay>
        </div>
        <div className='bg-black'>
          <BarReproduction></BarReproduction>
        </div>
      </div>
      <ToastContainer theme='dark'></ToastContainer>
    </div>
  );
}

export default App;