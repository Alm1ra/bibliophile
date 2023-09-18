import './SearchPage.css';

export default function SearchPage() {
    return (
        <div className='search-content'>
            <div className='search-header'>
                <h1>SEARCH FOR A BOOK</h1>
                <form className='search-form' action='#'>
                    <input type="text" id="search" name="search" value=""></input>
                    <input type="submit" className='search-button' value="SEARCH"></input>  
                </form>
            </div>
            <div className='search-result'>
                Book1
            </div>
        </div>
    );
}