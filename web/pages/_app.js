import ContextWrapper from '../context/ContextWrapper'
import dark from '../themes/dark'
import light from '../themes/light'
import usePersistedState from '../utils/usePersistedState';
import { GlobalStyle } from '../styles/GlobalStyle'

export default function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
      setTheme(theme.title === 'dark' ? light : dark);
  };
    return (
    <>
        <ContextWrapper theme={theme}>
                <GlobalStyle />
                <Component toggleTheme={toggleTheme} {...pageProps} />
        </ContextWrapper>
    </>
    )
}

export function reportWebVitals(metric) {
    console.log(metric)
  }