import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
    --dark-purple:  rgb(121, 100, 239);
    --dark-blue: #363f5f;
}
  html,
  body {
    padding: 0;
    margin: 0;
    background: #f0f2f5;
    max-width: 100vw;
    max-height: 100vh;
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
  :root {
  --dark-blue: #363f5f;
}
html,
body {
  padding: 0;
  margin: 0;
  background: #f0f2f5;
  max-width: 100vw;
  max-height: 100vh;
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
  /*border: none;*/
}

h2 {
  margin-top: 3.2rem;
  margin-bottom: 0.8rem;
  color: var(--dark-blue);

  font-weight: normal;
}

.semiBorderRadius {
  border-radius: 0.25rem 0 0 0.25rem;
}
td {
  background: white;
  padding: 1rem 2rem;
  font-weight: normal;
  max-width: 100vw;
}

th {
  background: white;
  font-weight: normal;
  padding: 1rem 2rem;
  text-align: left;
}
`
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}