import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div class="home">
        <div class="content">
          <div class="bar">
            <div id="menu">
              <h3>MENU</h3>
              <div id="menu-btn"><FontAwesomeIcon icon={faBarsStaggered} /></div>
            </div>
            <div class="navbar">
              <ul>
                <a href="./"><li><FontAwesomeIcon icon={faHouse} /> HOME</li></a>
                <a href="#"><li><FontAwesomeIcon icon={faPlus} /> ADD</li></a>
                <a href="#"><li><FontAwesomeIcon icon={faMagnifyingGlass} /> SEARCH</li></a>
                <a href="#"><li><FontAwesomeIcon icon={faChartSimple} /> STATISTIC</li></a>
              </ul>
            </div>
          </div>
          
          <div class="header">
            <div class="desc">
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
        <div class="footer">
        <h4>© 2023 Copyright: Aleksandra Frydlewicz</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
