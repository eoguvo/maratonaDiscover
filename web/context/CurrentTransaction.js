import React, { createContext, useState } from 'react';

const CurrentTransactionContext = createContext({ currentTransaction: {} });

export const CurrentTransactionProvider = ({ children }) => {
    const [currentTransaction, setCurrentTransaction] = useState({});

    return (
        <CurrentTransactionContext.Provider value={{ currentTransaction, setCurrentTransaction }}>
            {children}
        </CurrentTransactionContext.Provider>
    )
}

export default CurrentTransactionContext;