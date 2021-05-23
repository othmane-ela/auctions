import Styled from 'styled-components'

const LeftAside = Styled.aside`
    grid-area: left;
    position :fixed;
    height:100%;
    top:72px;
    z-index : -1;
    width:15%;
`;

export default function LeftSide() {
    return <LeftAside>The Left Side</LeftAside>
}