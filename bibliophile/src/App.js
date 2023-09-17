import './App.css';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import SearchPage from './pages/SearchPage';
import StatisticPage from './pages/StatisticPage';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="home">
          <Sidebar/>         
          <div className="header">
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/add' element={<AddPage/>}/>
              <Route path='/search' element={<SearchPage/>}/>
              <Route path='/statistic' element={<StatisticPage/>}/>
            </Routes>
          </div>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
