import {createGlobalStyle} from "styled-components"


export const GlobalStyle = createGlobalStyle`
    
    body{
        background-color: #d0d3d3;
        padding: 0;
        margin: 0;
    }
 .text{
    font-size: 100px;
 }
 .container{
    width: 80%;
    
    height: 300px;
    margin: auto;
    
 }
 .pic  img{
    width: 50vh;
    height: 50vh;
    margin-left: 100px;
 }
 .grid{
        display: flex;
        margin-top: 100px;
    }
    .txt p{
        text-align: justify;
    }
`