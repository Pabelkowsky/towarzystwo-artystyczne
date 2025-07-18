import Lenis from 'lenis'
import Main from './sites/Home/Main';
import About from './sites/Home/About';



function App() {

const lenis = new Lenis({
  autoRaf: true,
});

  return(
    <>
      <Main />
      <About />
      <div className="h-[100dvh]"></div>

    </>
  )
}

export default App
