
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/home/Home';
import Blog from './pages/home/Blog';
import Services from './pages/home/Services';
import ErrorPage from './component/ErrorPage';
import Pricing from './pages/home/Pricing';
import Register from './component/Register';
import Login from './component/Login';
import Contact from './pages/home/Contact';
import WebDesign from './pages/home/WebDesign';
import AppDevelopment from './pages/home/AppDevelopment';
import UiUxDesign from './pages/home/UiUxDesign';
import SeoSection from './pages/home/SeoSection';
import FAQs from './pages/home/FAQs';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* Parent Route */}
      <Route path='/' element={<App />}>
        <Route index element={<Home />} /> {/* Default route */}
        <Route path='home' element={<Home />} />
        <Route path='blog' element={<Blog />} />
        <Route path='services' element={<Services/>} />
        <Route path='freeTrial' element={<Pricing/>} />
        <Route path='*' element={<ErrorPage/>} />
        <Route path='contact' element={<Contact/>}/>
        <Route path='website' element={<WebDesign/>}/>
        <Route path='app' element={<AppDevelopment/>}/> 
        <Route path='uiux' element={<UiUxDesign/>}/>
       <Route path='seo' element={<SeoSection/>}/>
       <Route path="faq" element={<FAQs/>}/>
      </Route>

      {/* Register Route (outside App) */}
      <Route path='/register' element={<Register />} />
      <Route path='/logIn' element={<Login/>} />
    </Routes>
  </BrowserRouter>
);
