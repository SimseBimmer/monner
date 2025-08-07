import { NavBar } from '../NavBar/NavBar'
import { NavLink } from 'react-router-dom'
import './header.scss';

export const Header = () => {
    return (
        <header>

            <div id='logo'>
                <NavLink to="/">
                    <img id='MainLogo' src="/MonsterLogo.jpg" alt="Monster Logo" />
                </NavLink>
                <div id='TextLogoContainer'>
                    <div id='TextLogoContainerInner'>
                        <NavLink to="/">
                            <img id='TextLogo' src="/MonsterLogoText.jpg" alt="Monster Text" />
                        </NavLink>

                    </div>
                    <NavBar />

                </div>

            </div>
        </header>
    )
}