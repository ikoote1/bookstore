import { Link } from "react-router-dom"
const navigation = () => {
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

export default navigation