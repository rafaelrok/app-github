import { Link } from "react-router-dom";
import './styles.css';


const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="\" className="nav-logo">
                <h4 className="text-primary">GitHub - API</h4>
            </Link>
        </nav>
    );
};

export default Navbar;