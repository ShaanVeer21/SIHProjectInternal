import { Route, Routes,Outlet } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import Menu from './components/Menu/Menu';
import VerifySos from './pages/VerifySos/VerifySos';
import TrackTrucks from './pages/TrackTrucks/TrackTrucks';
import Alerts from './pages/AlertWarning/Alerts';
import Advisories from './pages/Advisories/Advisories';
import Navbar from './components/Navbar/Navbar';
import DisasterAnalysis from './pages/DisasterAnalysis/DisasterAnalysis';



const Layout = () => {
  return (
    <div className='MainContainer'>
      <div className="menuContainer "><Menu /></div>
      <div className="contentContainer">
        <Outlet />
      </div>
    </div>
  )
}



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path='/home/disasteranalysis' element={<DisasterAnalysis />} />
          <Route path='/home/verifysos' element={<VerifySos />} />
          <Route path='/home/advisories' element={<Advisories />} />
          <Route path='/home/track' element={<TrackTrucks />} />
          <Route path='/home/alert' element={<Alerts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
