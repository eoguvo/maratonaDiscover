import React from 'react';
import styles from './styles.module.css'
import cx from 'classnames';

const BalanceCard = ({ value, title, className, ...rest }) => {
    const newClassName = className.split(' ');
    return (
        <div 
                className={cx(
                                          styles[`${newClassName[0]}`], 
                                          newClassName.length != 1 && styles[`${newClassName[1]}`]
                                      )} 
                  {...rest}>
          <h3 className={styles.cardH3} >{title}</h3>
          <p>{value}</p>
        </div>
    )
}

export default BalanceCard;