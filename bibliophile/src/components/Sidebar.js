import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
export default function Sidebar() {
    return (
        <div className="bar">
            <div id="menu">
              <h3>MENU</h3>
              <div id="menu-btn"><FontAwesomeIcon icon={faBarsStaggered} /></div>
            </div>
            <div className="navbar">
              <ul>
                <a href="./"><li><FontAwesomeIcon className='icon' icon={faHouse} /> HOME</li></a>
                <a href="#"><li><FontAwesomeIcon className='icon' icon={faPlus} /> ADD</li></a>
                <a href="#"><li><FontAwesomeIcon className='icon' icon={faMagnifyingGlass} /> SEARCH</li></a>
                <a href="#"><li><FontAwesomeIcon className='icon' icon={faChartSimple} /> STATISTICS</li></a>
              </ul>
            </div>
        </div>
    );
}