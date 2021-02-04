import { ThemeProvider } from 'styled-components';
import { CurrentTransactionProvider } from './CurrentTransaction';
import { TransactionProvider } from './Transaction';

const ContextWrapper = ({ children, theme }) => {
    return (
        <ThemeProvider theme={theme}>
            <CurrentTransactionProvider>
                <TransactionProvider>
                    {children}
                </TransactionProvider>
            </CurrentTransactionProvider>
        </ThemeProvider>
    )
}

export default ContextWrapper;