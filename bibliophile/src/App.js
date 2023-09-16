import './App.css';

function App() {
  return (
    <div className="App">
      <div class="home">
        <div class="content">
          <div class="bar">
            <div id="menu">
              <h3>MENU</h3>
              <div id="menu-btn"><i class="fa-solid fa-bars-staggered"></i></div>
            </div>
            <div class="navbar">
              <ul>
                <a href="#"><li><i class="fa-solid fa-house"></i> HOME</li></a>
                <a href="#"><li><i class="fa-solid fa-plus"></i> ADD</li></a>
                <a href="#"><li><i class="fa-solid fa-magnifying-glass"></i> SEARCH</li></a>
                <a href="#"><li><i class="fa-solid fa-chart-simple"></i> STATISTIC</li></a>
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
