import React from 'react';
import { Card, H3, P } from './styles'

const BalanceCard = ({ value, title, className, ...rest }) => {
    const newClassName = className.split(' ').length > 1 ? 'total' : '';
    return (
        <Card type={newClassName}
                  {...rest}>
          <H3 >{title}</H3>
          <P>{value}</P>
        </Card>
    )
}

export default BalanceCard;