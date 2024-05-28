import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/homePage';
import Oikeudellisettiedot from './pages/Oikeudellisettiedot/oikeudellisettiedotPage';
import EULA from './pages/EULA/EULAPage';
import Kayttoehdot from './pages/Kayttoehdot/kayttoehdotPage';
import Tietosuojakaytanto from './pages/Tietosuojakaytanto/tietosuojakaytantoPage';
import NotFound from './pages/Notfound/404Page';
import Lomake from './pages/Lomake/LomakePage';
import ContactPage from './pages/Contact/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/KayttoehdotPage" element={<Kayttoehdot />} />
        <Route path="/Lomake" element={<Lomake />} />
        <Route path="/TietosuojakaytantoPage" element={<Tietosuojakaytanto />} />
        <Route path="/Oikeudellisettiedot" element={<Oikeudellisettiedot />} />
        <Route path="/EULA" element={<EULA />} />
      </Routes>
    </Router>
  );
}

export default App;
