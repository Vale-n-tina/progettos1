
import './App.css';
import MyNavbar from './components/MyNavbat';
import "bootstrap/dist/css/bootstrap.min.css"
import SecondNavbar from './components/SecondNavbar';
import MyFirstMain from './components/MyFirstMain';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="App" style={{  backgroundColor: "#221f1f",  }} >
      <header>
      <MyNavbar/>
        <SecondNavbar/>
        
      </header>
      <main>
        <MyFirstMain url="http://www.omdbapi.com/?apikey=76052b01&s=spider man" title="Trending Now"/>
        <MyFirstMain url="http://www.omdbapi.com/?apikey=76052b01&s=harry potter" title="Watch it Again"/>
        <MyFirstMain url="http://www.omdbapi.com/?apikey=76052b01&s=barbie" title="New Releases"/>
        </main>
        <footer>
          <MyFooter/>
        </footer>
    </div>
  );
}

export default App;
