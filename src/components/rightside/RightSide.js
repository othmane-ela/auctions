import Styled from 'styled-components';

const RightAside = Styled.aside`
    grid-area: right;
    width:100%;
`;

export default function RightSide() {
     return <RightAside>The Right</RightAside>
}