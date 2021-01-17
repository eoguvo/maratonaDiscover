import React from 'react';
import {Td, Tr, Desc} from './styles.js'

const Transaction = ({ desc, value, date }) => {
    return (
        <Tr >
            <Desc >{desc}</Desc>
            <Td type={/^-/.test(value) ? "expense" : "income"} >{value}</Td>
            <Td >{date}</Td>
        </Tr>
    )
}

export default Transaction;