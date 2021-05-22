import Styled from 'styled-components'

const LeftAside = Styled.aside`
     grid-area: left;
`;

export default function LeftSide() {
    return <LeftAside>The Left Side</LeftAside>
}