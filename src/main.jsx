import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/Theme.css';
import Home from './pages/Home'
import PageNoteFound from './pages/PageNoteFound'
import About from './pages/About'
import Realisations from './pages/Realisations'
import Services from './pages/Services'
import Contact from './pages/Contact';

const urlParams = new URLSearchParams(window.location.search);
const redirectPath = urlParams.get("redirect");

if (redirectPath) {
  window.history.replaceState(null, "", "/rufus-akande" + redirectPath);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/rufus-akande">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/apropos' element={<About/>} />
        <Route path='/realisations' element={<Realisations/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<PageNoteFound/>} />
      </Routes>
    </Router>
  </StrictMode>,
)
