import "./Header.css"
import { Link } from 'react-router-dom';
function Header(props) {
    return (

        <>
        <header>         
        <nav>
                <Link to='/'>  Home </Link>
            </nav>
             <h1 className="header">Travel Destination</h1>
         
            </header>

        </>

    );
}

export default Header;
