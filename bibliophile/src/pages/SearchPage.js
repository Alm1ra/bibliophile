import Book from '../components/Book';
import './SearchPage.css';

export default function SearchPage() {

    var books = [];

    books.push({title: "The Fellowship of the Ring", author: "Tolkien, J.R.R.", genre: "Fantasy", description: "It follows the perilous journey of Frodo Baggins and his diverse group of companions as they set out to destroy a powerful and corrupting ring, embarking on a quest filled with adventure, danger, and the enduring themes of friendship and heroism in a richly imagined world."});
    books.push({title: "The Two Towers", author: "Tolkien, J.R.R.", genre: "Fantasy", description: "Two hobbits must journey into Mordor and destroy an ancient and evil ring before it destroys Middle Earth. The Lord of the Rings is now a major motion picture trilogy."});
    books.push({title: "The Return of the King", author: "Tolkien, J.R.R.", genre: "Fantasy", description: "In this epic finale, Aragorn leads the forces of good in a final battle against the dark lord Sauron, while Frodo and Sam journey to destroy the One Ring."});
    books.push({title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", description: "A timeless classic by Jane Austen that explores the complex world of 19th-century English society. At its heart is the headstrong and witty Elizabeth Bennet, who navigates issues of class, love, and marriage while contending with the proud and enigmatic Mr. Darcy."});
    books.push({title: "The Martian", author: "Andy Weir", genre: "Science Fiction", description: "A gripping science fiction novel that follows the harrowing journey of Mark Watney, an astronaut stranded on Mars. With resourcefulness and humor, Watney battles the planet's harsh environment and isolation, using his scientific expertise to survive."});
    
    
    return (
        <div className='search-content'>
            <div className='search-header'>
                <div className='search-header-cont'>
                    <h1>SEARCH FOR A BOOK</h1>
                    <form className='search-form' action='#'>
                        <input type="text" className="search-text" name="search" value=""></input>
                        <input type="submit" className='search-button' value="SEARCH"></input>  
                    </form>
                </div>              
            </div>
            <div className='search-result'>
                <Book title={books[0].title} author={books[0].author} genre={books[0].genre} description={books[0].description}/>
                <Book title={books[1].title} author={books[1].author} genre={books[1].genre} description={books[1].description}/>
                <Book title={books[2].title} author={books[2].author} genre={books[2].genre} description={books[2].description}/>
            </div>
        </div>
    );
}