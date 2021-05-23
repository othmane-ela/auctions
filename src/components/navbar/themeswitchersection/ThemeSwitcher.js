import React from 'react'
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../../themesConfig";
import Styled from 'styled-components';
import Button from '../../tools/Button';
import { FiSun,FiMoon } from "react-icons/fi";


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

        const theme = this.state.theme;


        return       <Switcher>
                        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                        <GlobalStyles/>
                         </ThemeProvider>
                        <div className="tool-margin">  {
                                    theme === "light" ?
                                    (<Button onClick={this.themeToggler} type="btn-zhite"><FiMoon size="1.5em" /></Button>) :
                                    (<Button onClick={this.themeToggler} type="btn-dark" ><FiSun size="1.5em" /></Button>)
                        }
                        </div>
                           
                      </Switcher>
    }
}


export default ThemeSwitcher;

/*

 {
         theme==="light" ? <FiMoon size="1.5em" />  : <FiSun color="#FFF" size="1.5em"/>
                                   }

                                   */