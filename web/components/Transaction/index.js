import React from 'react';
import styles from './styles.module.css'
import cx from 'classnames';

const Transaction = ({ desc, value, date }) => {
    return (
        <tr className={styles.tr}>
            <td className={cx(styles['desc'])}>{desc}</td>
            <td className={cx(styles[/^-/.test(value) ? "expense" : "income"])}>{value}</td>
            <td className="date">{date}</td>
        </tr>
    )
}

export default Transaction;