import { useContext } from 'react';
import {Td, Tr, Desc} from './styles.js'

import TransactionContext from '../../context/Transaction'

import TransactionHandler from '../../Services/TransactionHandler';

const Transaction = ({ desc, value, date, id, ...rest }) => {
    const { transactions, setTransactions } = useContext(TransactionContext);
    const transactionHandler = new TransactionHandler(transactions);
    const HandleRemove = (e) => {
        const newTransactions = transactionHandler.removeTransaction(id);
        setTransactions(newTransactions);
    }
    return (
        <Tr {...rest}>
            <Desc >{desc}</Desc>
            <Td type={/^-/.test(value) ? "expense" : "income"} >{value}</Td>
            <Td >{date}</Td>
            <Td onClick={HandleRemove}>
                <img
                    alt="delete"
                    src="/assets/minus.svg"
                    width={24}
                    height={24}
                />
            </Td>
        </Tr>
    )
}

export default Transaction;