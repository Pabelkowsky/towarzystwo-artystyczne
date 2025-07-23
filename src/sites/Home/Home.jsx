import Main from './Main';
import About from './About';
import Sponsors from './Sponsors';
import ArtistGroups from './ArtistGroups';
import JoinUs from './JoinUs';
import SupportUs from './SupportUs';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';

import LenisWrapper from '../../components/LenisWrapper';



export default function Home() {


  return(
    <>
    <LenisWrapper>
      <Navbar />
      <Main />
      <About />
      <Sponsors />
      <ArtistGroups />
      <JoinUs />
      <SupportUs />
      <Contact />
      <Footer />
    </LenisWrapper>
    </>
  )
}

