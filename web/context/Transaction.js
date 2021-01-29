import React, { createContext, useState } from 'react';

const seed = [{
    id: 1,
    description: 'Luz',
    amount: -500,
    date: '2021-01-28'
},
{
    id: 2,
    description: 'website',
    amount: 5000,
    date: '2021-01-28'
},
{
    id: 3,
    description: 'Internet',
    amount: -299.99,
    date: '2021-01-28'
}
]

const TransactionContext = createContext({ transactions: seed });

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState(seed);

    return (
        <TransactionContext.Provider value={{ transactions, setTransactions }}>
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionContext;