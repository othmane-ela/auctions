import './LeftSide.scss'

import Styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const LeftAside = Styled.aside`
    grid-area: left;
    position :fixed;
    height:100%;
    top:72px;
    width:15%;
`;

export default function LeftSide() {
    return <LeftAside>
                 <ul className="ul-links">
                    <li>
                        <NavLink exact  to="/" className="link">Market</NavLink>
                    </li>
                    <li>
                        <NavLink exact  to="/subscriptions" className="link">Subscriptions</NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/subscriptions" className="link">Offers</NavLink>
                     </li>
                        <li>
                                <NavLink exact  to="/" className="link">Track ffers</NavLink>
                            </li>
                            <li>
                                <NavLink exact  to="/subscriptions" className="link">Purchases</NavLink>
                            </li>
                            <li>
                                    <NavLink exact  to="/subscriptions" className="link">Orders</NavLink>
                            </li>
                  
                     <li>  <NavLink exact to="/subscriptions" className="link">Sellers</NavLink> </li>
               </ul>
            </LeftAside>
}