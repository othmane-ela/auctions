import React from 'react'
import Styled from 'styled-components'

const Main = Styled.main`
 grid-area: middle;
`
export default class Subscriptions extends React.Component{

    render() {
        return <Main><h1>Subscriptions packs</h1></Main>
    }    
}