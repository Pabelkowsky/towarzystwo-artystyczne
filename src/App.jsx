import Lenis from 'lenis'
import Main from './sites/Home/Main';
import About from './sites/Home/About';
import Sponsors from './sites/Home/Sponsors';
import ArtistGroups from './sites/Home/ArtistGroups';
import JoinUs from './sites/Home/JoinUs';
import SupportUs from './sites/Home/SupportUs';



function App() {

const lenis = new Lenis({
  autoRaf: true,
});

  return(
    <>
      <Main />
      <About />
      <Sponsors />
      <ArtistGroups />
      <JoinUs />
      <SupportUs />
      <div className="h-[100dvh]"></div>

    </>
  )
}

export default App
