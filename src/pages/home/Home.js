import React from 'react'
import Styled from 'styled-components'
import MainCarousel from '../../components/mainCarousel/MainCarousel'

const Main = Styled.main`
 grid-area: middle;
`
export default class Home extends React.Component{

    render() {
        return <Main>
                 <div className="title">
                    <h1>Let's go</h1>
                </div>
                <MainCarousel/>
        </Main>
    }    
}