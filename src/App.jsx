import Lenis from 'lenis'
import Button from './components/Button';
import Main from './sites/Home/Main';



function App() {

const lenis = new Lenis({
  autoRaf: true,
});

  return(
    <>
      <Main />
      <div className="h-[100dvh]"></div>
    </>
  )
}

export default App
