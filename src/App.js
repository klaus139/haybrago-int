
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';

function App() {
  return (
   <>
   <ToastContainer />
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />

    </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
