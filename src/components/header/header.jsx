import { NavBar } from '../NavBar/NavBar'
import './header.scss';

export const Header = () => {
    return (
        <header>
            <div id='logo'>
                <img id='MainLogo' src="/MonsterLogo.jpg" alt="Monster Logo" />
                <div id='TextLogoContainer'>
                    <div id='TextLogoContainerInner'>                    
                        <img id='TextLogo' src="/MonsterLogoText.jpg" alt="Monster Text" />
                    </div>                    
                    <NavBar />

                </div>

            </div>
        </header>
    )
}