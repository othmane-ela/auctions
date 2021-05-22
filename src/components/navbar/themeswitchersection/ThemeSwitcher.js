import React from 'react'
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../../themesConfig";
import Styled from 'styled-components';


const Switcher = Styled.div`
            flex: 15%;
            display:flex;
            align-items:center;
            justify-content:center; 
`;

class ThemeSwitcher extends React.Component{

    constructor(props) {
            
            super(props);
            this.state = {
                theme : 'light'
            }
            this.themeToggler = this.themeToggler.bind(this);
    }


    componentDidMount() {
        const currentTheme = localStorage.getItem('activeTheme') ?  localStorage.getItem('activeTheme') : 'light'
        this.setState({
            theme : currentTheme
        })
    }


    themeToggler() {
    
        if (this.state.theme === "light") {
            this.setState({ theme: 'dark' });
            localStorage.setItem('activeTheme', 'dark');
        }
        else {
            this.setState({ theme: 'light' });
            localStorage.setItem('activeTheme', 'light');
        }
    }

    render() {
        return       <Switcher>
                        <ThemeProvider theme={this.state.theme === "light" ? lightTheme : darkTheme}>
                        <GlobalStyles/>
                        </ThemeProvider>
                        <button onClick={this.themeToggler}>Switch</button>
                      </Switcher>
                  
    }
}


export default ThemeSwitcher;