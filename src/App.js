
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
import Security from './pages/Security';
import Blog from './pages/Blog';
import Blog2 from './pages/Blog2';

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
    <Route path='/security' element={<Security />} />
    <Route path='/post/New_PV40_Motion_Sensor_Camera' element={<Blog />}/>
    <Route path='/post/training_of_new_Security_Operatives_for_Olean_Group' element={<Blog2 />} />

    </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
