import { ThemeProvider } from 'styled-components';
import { ModalProvider } from './Modal';
import { TransactionProvider } from './Transaction';

const ContextWrapper = ({ children, theme }) => {
    return (
        <ThemeProvider theme={theme}>
            <ModalProvider>
                <TransactionProvider>
                    {children}
                </TransactionProvider>
            </ModalProvider>
        </ThemeProvider>
    )
}

export default ContextWrapper;