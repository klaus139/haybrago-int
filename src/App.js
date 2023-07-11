
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Project from './components/project/Project';
import Hotels from './pages/Hotels';
import Mines from './pages/Mines';
import Farms from './pages/Farms';
import OurTeam from './pages/OurTeam';

function App() {
  return (
   <>
   <ToastContainer />
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/about-us" element={<About />} />
    <Route path='/contact-us' element={<ContactUs />} />
    <Route path='/project' element={<Project />} />
    <Route path='/hotels' element={<Hotels />} />
    <Route path='/mines' element={<Mines />} />
    <Route path='/farms' element={<Farms />} />
    <Route path='/our-team' element={<OurTeam />} />

    </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
