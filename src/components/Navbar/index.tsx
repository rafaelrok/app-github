import { Link } from "react-router-dom";
import './styles.css';

const Navbar = () => {
    return (
        <nav className="navbar main-nav">
            <Link to="/">
                <h4 className="text-nav">Github API</h4>
            </Link>
        </nav>
    );
};

export default Navbar;