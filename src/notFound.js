import Styled from "styled-components"
const Main = Styled.main`
 grid-area: middle;
`

export default function notFound() {
    return <Main><h1>Not Found !</h1></Main>
}