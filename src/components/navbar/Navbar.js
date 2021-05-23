
import Logo from './logosection/Logo';
import Links from './linksection/Links';
import Search from './searchsection/Search';
import Account from './accountsection/Account';
import ThemeSwitcher from './themeswitchersection/ThemeSwitcher';
import Styled from 'styled-components';

const Nav = Styled.nav`
    display : flex;
    flex-direction : row;
    justify-content:center;
    grid-area: head;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
    z-index:0;
    position:fixed;
    width:100%;
`;

export default function Navbar() {
    return <Nav>
                <Logo />
                <Links />
                <Search />
                <Account/>
                <ThemeSwitcher/>
            </Nav>
}
 