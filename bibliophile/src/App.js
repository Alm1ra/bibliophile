import './App.css';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="home">
        <div className="content">
          <Sidebar/>         
          <div className="header">
            <div className="desc">
            <h1>BIBLIOPHILE</h1>
            <h2>Dive into a world of books</h2>
            <h2>Discover new reads</h2>
            <h2>Your next adventure begins now</h2>
              <form action="#">
                <input type="submit" value="SEARCH NOW"/>
              </form>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
