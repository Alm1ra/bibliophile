import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
export default function Sidebar() {

var isCollapsed = false;

  function menuBtnHandler() {
    const bar = document.querySelector('.bar');

    if(!isCollapsed) {
      bar.classList.add('hover-collapse');
      isCollapsed = true;
    }
    else {
      bar.classList.remove('hover-collapse');
      isCollapsed = false;
    }
  }

    return (
        <div className="bar">
            <div className="menu">
              <h3><span className='bar-text'>MENU</span></h3>
              <button onClick={menuBtnHandler} id="menu-btn"><FontAwesomeIcon icon={faBarsStaggered} /></button>
            </div>
            <div className="navbar">
              <ul>
                <a href="./"><li><FontAwesomeIcon className='icon' icon={faHouse}/><span className='bar-text'> HOME</span></li></a>
                <a href="#"><li><FontAwesomeIcon className='icon' icon={faPlus} /><span className='bar-text'> ADD</span></li></a>
                <a href="#"><li><FontAwesomeIcon className='icon' icon={faMagnifyingGlass} /><span className='bar-text'> SEARCH</span></li></a>
                <a href="#"><li><FontAwesomeIcon className='icon' icon={faChartSimple} /><span className='bar-text'> STATISTICS</span></li></a>
              </ul>
            </div>
        </div>
    );
}