import { createGlobalStyle } from 'styled-components'


export const lightTheme = {
 // colorL1: "#F8F8F8",
 // colorL2: "#F2F2F2",
 // colorL3: "#E8E8E8",
 // colorL4: "#E8E8E8",
 // colorL5: "#DBDBDB",
              
  bodyColor: "#F8F8F8",
  fontColor: "#0F0F0F",
  headerColor: "#F8F8F8",
  asideColor: "#F2F2F2",
  inputColor : '#E8E8E8'
};


export const darkTheme = {
 // colorD1: "#0F0F0F",
 // colorD3: "#151515",
  // colorD4: "#1F1F1F",
  // colorD5: "#1B1B1B",
  // colorD6: "#2B2B2B",
                
  bodyColor: "#0F0F0F",
  fontColor: "#F8F8F8",
  headerColor: "#1F1F1F",
  asideColor: "#151515",
  inputColor : '#151515'
            
};

export const GlobalStyles = createGlobalStyle`

    // VARIABLES
    :root{
      --primary-color :#38D15B;
    }

    // GLOBAL BODY  
    body {
       	background-color: ${(props) => props.theme.bodyColor };
        color : ${(props) => props.theme.fontColor };
        transition : 0.1s;
        
    }
    
    // NAVBAR
    nav{
      	background-color: ${(props) => props.theme.headerColor };
    }

    // SIDES BARES
    aside{
      	background-color: ${(props) => props.theme.asideColor };
    }

    // LINKS
    a{
        color : ${(props) => props.theme.fontColor };
        text-decoration:none;
    }

    // INPUTS
    input{
        background-color : ${(props) => props.theme.inputColor };
        color : ${(props) => props.theme.fontColor };
        outline:none;
        border:0;
        padding: 5px 15px;
        border-radius: 4px;
    }

`;