import Styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import "./Links.scss"

const LinksSection = Styled.div`
            flex: 15%;
            display:flex;
            align-items:center;
            justify-content:center
`;

export default function Links() {

    return <LinksSection>
            <ul className="nav-links">
                <li>
                    <NavLink exact  to="/" className="linkstyle">Market</NavLink>
                </li>
                <li>
                    <NavLink exact  to="/subscriptions" className="linkstyle">Subscriptions</NavLink>
                </li>
            </ul>
     </LinksSection>
}