import Styled from 'styled-components';

const RightAside = Styled.aside`
    grid-area: right;
    width:100%;
    text-align:center;
`;

export default function RightSide() {
     return <RightAside><h1>#</h1></RightAside>
}