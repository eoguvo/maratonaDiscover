import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
:root {
    --dark-purple:  rgb(121, 100, 239);
    --dark-blue: #363f5f;
    --primary: ${({theme}) => theme.colors.primary};
    --text: ${({theme}) => theme.colors.text}
}
  html,
  body {
    padding: 0;
    margin: 0;
    max-width: 100vw;
    max-height: 100vh;
  }

  body { 
    background: ${(props) => props.theme.colors.background};
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  
  h2 {
    margin-top: 3.2rem;
    margin-bottom: 0.8rem;
    color: rgb(121, 100, 239);
    font-weight: normal;
  }
  
  .semiBorderRadius {
    border-radius: 0.25rem 0 0 0.25rem;
  }
`