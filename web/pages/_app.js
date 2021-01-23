import { ThemeProvider } from 'styled-components';
import { ModalProvider } from '../context/Modal';

import dark from '../themes/dark'
import light from '../themes/light'
import usePersistedState from '../utils/usePersistedState';
import { GlobalStyle } from '../styles/GlobalStyle'

export default function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
      setTheme(theme.title === 'dark' ? light : dark);
      console.log(theme)
  };
    return (
        <ThemeProvider theme={theme}>
            <ModalProvider>
                <GlobalStyle />
                <Component toggleTheme={toggleTheme} {...pageProps} />
            </ModalProvider>
        </ThemeProvider>
    )
}