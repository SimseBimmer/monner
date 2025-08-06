import { NavLink } from 'react-router-dom'
import './NavBar.scss';

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Forside</NavLink></li>
                <li><NavLink to="/Produkter">Produkter</NavLink></li>
                <li><NavLink to="/Login">Login</NavLink></li>
            </ul>
        </nav>
    )
}
