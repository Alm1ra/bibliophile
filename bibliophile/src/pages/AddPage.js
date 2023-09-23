import './AddPage.css'

export default function AddPage() {
    return (
        <div className='add-content'>
            <div className='add_form'>
                <h1>ADD YOUR BOOK</h1>
                <form action="#">
                    <div className="add-form">
                        <label form="title">Title:</label>
                        <input type="text" id="title" name="title" value=""></input>

                        <label form="author">Author:</label>
                        <input type="text" id="author" name="author" value=""></input>

                        <label form="genre">Genre:</label>
                        <select id="genre" name="genre">
                        <option value="adventure">Adventure</option>
                            <option value="art">Art</option>
                            <option value="children’s">Children’s</option>
                            <option value="contemporary">Contemporary</option>
                            <option value="cookbook">Cookbook</option>
                            <option value="development">Development</option>
                            <option value="dystopian">Dystopian</option>
                            <option value="families_relationships">Families & Relationships</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="guide">Guide</option>
                            <option value="health">Health</option>
                            <option value="historical_fiction">Historical fiction</option>
                            <option value="history">History</option>
                            <option value="horror">Horror</option>
                            <option value="humor">Humor</option>
                            <option value="memoir">Memoir</option>
                            <option value="motivational">Motivational</option>
                            <option value="mystery">Mystery</option>
                            <option value="paranormal">Paranormal</option>
                            <option value="romance">Romance</option>
                            <option value="science_fiction">Science Fiction</option>
                            <option value="self_help">Self-help</option>
                            <option value="thriller">Thriller</option>
                            <option value="travel">Travel</option>
                        </select>

                        <label form="summ">Summary:</label>
                        <textarea id="text" name="summ" rows="5" cols="46"></textarea>
                    </div>
                    <input type="submit" className='add-input' value="SUBMIT"></input>
                </form>
            </div>
        </div>
    );
}