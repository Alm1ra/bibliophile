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
    const bar_texts = document.querySelectorAll('.bar-text');

    if(!isCollapsed) {
      bar.classList.add('hover-collapse');
      bar_texts.forEach(bar_text => {
        bar_text.classList.add('visuallyhidden');
        bar_text.classList.add('hidden');
      });
      isCollapsed = true;
    }

    else {
      bar.classList.remove('hover-collapse');
      setTimeout(function() {
        bar_texts.forEach(bar_text => {
          bar_text.classList.remove('visuallyhidden');
        })
      }, 250);

      setTimeout(function() {
        bar_texts.forEach(bar_text => {
          bar_text.classList.remove('hidden');
        })
      }, 200);

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