import {useContext} from 'react';
import { Card, H3, P } from './styles'
import Image from 'next/image';

import TransactionContext from '../../context/Transaction'

const BalanceCard = ({ value, title, className, icon, alt, ...rest }) => {
    const { transactions } = useContext(TransactionContext);
    const newClassName = className.split(' ').length > 1 ? 'total' : '';

    return (
        <Card icon={icon} type={newClassName}
                  {...rest}>
          <H3 >
              <span>{title}</span>
                <Image 
                    src={`/assets/${icon}`}
                    alt={alt}
                    width={24}
                    height={24}
                />
            </H3>
          <P>{value}</P>
        </Card>
    )
}

export default BalanceCard;