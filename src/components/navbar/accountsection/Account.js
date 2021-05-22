import Styled from 'styled-components'


const AccountSection = Styled.div`
            flex : 15%;
            display:flex;
            align-items:center;
            justify-content:center; 
`;

export default function Account() {
    return <AccountSection>
        <div>Account</div>
     </AccountSection>
}