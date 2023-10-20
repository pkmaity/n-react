import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/restaurant'}>Restaurant</Link>
                    </li>
                    <li>
                        <Link to={'/cat/list'}>Cat</Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;