
import './App.css';
import MyNavbar from './components/MyNavbat';
import "bootstrap/dist/css/bootstrap.min.css"
import SecondNavbar from './components/SecondNavbar';
import MyMain from './components/MyMain';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="App" style={{  backgroundColor: "#221f1f", height:"100vh"  }} >
      <header>
      <MyNavbar/>
        <SecondNavbar/>
        
      </header>
      <main>
        <MyMain/>
        </main>
        <footer>
          <MyFooter/>
        </footer>
    </div>
  );
}

export default App;
