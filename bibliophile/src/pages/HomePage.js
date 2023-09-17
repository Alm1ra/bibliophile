import './HomePage.css'

export default function HomePage() {
    return (
        <div className="home-content">
            <div className="desc">
                <h1>BIBLIOPHILE</h1>
                <h2>Dive into a world of books</h2>
                <h2>Discover new reads</h2>
                <h2>Your next adventure begins now</h2>
                <form action="#">
                    <input type="submit" className='home-input' value="SEARCH NOW"/>
                </form>
            </div>
        </div>
        
    )
}