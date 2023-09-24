import './Book.css'

export default function Book(props) {

    const title = props.title;
    const author = props.author;
    const genre = props.genre;
    const description = props.description;

    return (
        <div className="book">
            <div className="book-title">{title}</div>
            <div className="book-author">{author}</div>
            <div className="book-genre">Genre: {genre}</div>
            <div className="book-description">{description}</div>
        </div>
    )
}