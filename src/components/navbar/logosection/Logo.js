import "./Logo.scss"
import Styled from 'styled-components';

const LogoSection = Styled.div`
            flex: 15%;        
            display:flex;
            align-items:center;
            justify-content:center
`;

export default function Logo() {
    return <LogoSection>
        <div className="logo-typography"><span>Auctions</span><span>Now</span></div>
     </LogoSection>
}