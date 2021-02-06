import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
:root {
    --orange:#EA4D2C;
    --dark-purple:  rgb(121, 100, 239);
    --dark-blue: #363f5f;
    --primary: ${({theme}) => theme.colors.primary};
    --text: ${({theme}) => theme.colors.text};
    --switch: ${({theme})=>theme.title == 'dark' ? '#FFEB3B' : '#FFC107'};
    --background: ${({theme}) => theme.colors.background};
}
  html,
  body {
    font-size: 93.75%;
    padding: 0;
    margin: 0;
    max-width: 100vw;
    max-height: 100vh;
    transition: all 500ms !important;
    @media (min-width: 800px) {
        font-size: 87.5%; // 14px
    }
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
  @keyframes dashIn {
    from {
      opacity: 0;
      transform: translatey(100%);
    }
    to {
      opacity: 1;
      transform: translatey(0);
    }
  }
  input, textarea, select {
    background: var(--background);
    color: var(--text);
    width:100%;
  }

  h2 {
    margin-top: 3.2rem;
    margin-bottom: 0.8rem;
    color: rgb(121, 100, 239);
    font-weight: normal;
  }
  img {
    user-drag: none; 
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  @keyframes shine {
  to {
    background-position-x: -200%;
  }
}
`