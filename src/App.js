
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
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
   <FloatingWhatsApp
        phoneNumber="+2348033586496"
        accountName="HayBravo International"
        allowEsc
        allowClickAway
        notification
        notificationSound
        chatMessage='Welcome to HayBavo, How may we help you?'
        avatar='https://media.istockphoto.com/id/1276619054/vector/admin-support-service-icon.jpg?s=612x612&w=0&k=20&c=CpGB5FuhTTSJGggBb7VsTNxTZM-fmp7s8E6XMaIJQ84='
      />
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
