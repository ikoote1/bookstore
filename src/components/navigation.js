import { Link } from "react-router-dom"
const Navigation = () => {
    return(
        <div>
            <nav>
                <h1>Bookstore IKOOTE</h1>
                <ul>
                    <li>
                        <Link to="/">BOOKS</Link>
                    </li>
                    <li>
                        <Link to="categories">CATEGORIES</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation