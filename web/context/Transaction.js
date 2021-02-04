import React, { createContext, useState, useEffect } from 'react';

const TransactionContext = createContext({ transactions: [] });
/*if(typeof window === 'undefined')*/
const initialState = typeof window !== 'undefined' 
            ? JSON.parse(localStorage.getItem('transactions'))  || []
            : []

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState(initialState);

    useEffect(() =>{
        if(typeof window === 'undefined') return;
        localStorage.setItem('transactions', JSON.stringify(transactions))
    }, [transactions])

    return (
        <TransactionContext.Provider value={{ transactions, setTransactions }}>
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionContext;