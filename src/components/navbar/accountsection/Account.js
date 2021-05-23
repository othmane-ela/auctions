import Styled from 'styled-components'
import Button from '../../tools/Button';

const AccountSection = Styled.div`
            flex : 15%;
            display:flex;
            align-items:center;
            justify-content:center; 
`;

export default function Account() {
    return <AccountSection>
            <div className="notlogged">
                <Button type="btn-white">Sign in</Button>
                <Button type="btn-primary" >Sign up</Button>
            </div>
        </AccountSection>
}