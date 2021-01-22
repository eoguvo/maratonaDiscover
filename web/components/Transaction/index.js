import React from 'react';
import {Td, Tr, Desc} from './styles.js'
import Image from 'next/image';

const Transaction = ({ desc, value, date }) => {
    return (
        <Tr >
            <Desc >{desc}</Desc>
            <Td type={/^-/.test(value) ? "expense" : "income"} >{value}</Td>
            <Td >{date}</Td>
            <Td>
                <Image 
                    src="/assets/minus.svg"
                    width={24}
                    height={24}
                />
            </Td>
        </Tr>
    )
}

export default Transaction;