import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { useEffect } from 'react';
import Lenis from 'lenis';

import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';

import Home from './sites/Home/Home';
import News from './sites/News/News';
import Join from './sites/HowToJoin/HowToJoin';
import Handicraft from './sites/Handicraft/Handicraft';
import Literature from './sites/Literature/Literature';
import FilmPhotography from './sites/FilmPhotography/FilmPhotography';
import Painting from './sites/Painting/Painting';
import Music from './sites/Music/Music';
import DigitalArt from './sites/DigitalArt/DigitalArt';




export default function App() {
  return (
    <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/nowosci" element={<News />} />
            <Route path="/dolacz-do-nas" element={<Join />} />
            <Route path="/rekodzielo" element={<Handicraft />} />
            <Route path="/literatura" element={<Literature />} />
            <Route path="/film-i-fotografia" element={<FilmPhotography />} />
            <Route path="/malarstwo" element={<Painting />} />
            <Route path="/muzyka" element={<Music />} />
            <Route path="/sztuka-cyfrowa" element={<DigitalArt />} />
          </Route>
        </Routes>

    </Router>
  );
}
