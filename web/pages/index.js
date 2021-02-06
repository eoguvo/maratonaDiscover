import Head from 'next/head'
import { useState, useContext, useEffect } from 'react';

import dynamic from 'next/dynamic'

import { TransactionSkeleton } from '~/components/Transaction/styles';
import {BalanceSkeleton} from '../components/BalanceCard/styles'
import { Icon, Header, Logo, Container, Balance, Transiction, NewTransaction, DataTable, Th, Footer } from '../styles/home';
import { ScreenOnly } from '../styles/Utils'

const Toast = dynamic(
  ()=> import('../components/Toast/index'),
  { loading: () => <h1>Loading..</h1>}
)
const BalanceCard = dynamic(
  ()=> import('../components/BalanceCard/index'),
  { loading: () => <BalanceSkeleton/> });
const Transaction = dynamic(
  ()=> import('../components/Transaction'),
  { loading: () => <TransactionSkeleton/> }
  );
const Modal = dynamic(
  ()=> import('../components/Modal/index'),
  { loading: () => <h1>Loading..</h1> });

import TransactionContext from '../context/Transaction';
import currentTransactionContext from '../context/CurrentTransaction';

import Util from '../utils/index.js';

import TransactionHandler from '../Services/TransactionHandler';

export default function Home({ toggleTheme }) {
  const [switchclass, setswitchclass] = useState('sun');
  const [income, setIncome] = useState('')
  const [total, setTotal] = useState('')
  const [expense, setExpense] = useState('')
  const [isActive, setActive] = useState(false)
  const [isLoaded, setLoaded] = useState(false)
  const [notification,setNotification] = useState('')
  const [firstLoad, setFirstLoad] = useState(true)


  const { transactions, setTransactions } = useContext(TransactionContext);
  const {currentTransaction } = useContext(currentTransactionContext);
  const toggleClick = () => {
    toggleTheme();
    setswitchclass(switchclass === 'sun' ? 'moon' : 'sun')
  }

  const transactionHandler = new TransactionHandler(transactions);

  const [innerDesc, setInnerDesc] = useState('')
  const [innerDate, setInnerDate] = useState('')
  const [innerAmount, setInnerAmount] = useState('')

  useEffect(() => {
    setInnerDesc(currentTransaction.description);
    setInnerAmount(currentTransaction.amount);
    setInnerDate(currentTransaction.date);
  }, [currentTransaction])

  useEffect(() => {
    transactions.length == 0 
    ? firstLoad && setNotification({
      title: 'Que tal começarmos criando uma nova transação?',
      message: 'Clique em "+ Nova Transação"',
      type: "alert",
      setNotification,
      fadeout: false
    }) 
    : !firstLoad && setNotification({
      title: 'Operação bem sucedida!',
      message: 'Transações alteradas com sucesso!',
      type: "success",
      setNotification,
    })

    const [currentExpenses, currentIncomes] = transactionHandler.getValues();
    setExpense(Util.formatCurrency(currentExpenses));
    setIncome(Util.formatCurrency(currentIncomes));
    setTotal(Util.formatCurrency(currentIncomes+ currentExpenses))
    setFirstLoad(false)
    }, [transactions])

  useEffect(() =>{
    setLoaded(true);
  }, [])
  return (
    <>
      <Head>
        <title>dev.finance$</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header>
        <Logo id="logo" alt="logo dev finace">dev.finance$</Logo>
        <Icon onClick={toggleClick}>
          <i className={`fas fa-${switchclass}`}></i>
        </Icon>
      </Header>
      <Container>
        <Balance id="balance">
          <ScreenOnly>Balanço</ScreenOnly>
          {isLoaded && <>
            <BalanceCard 
                title="Entradas" 
                value={income}
                className="card" 
                icon="income.svg" 
                alt="Icone de entradas" 
              />
                 <BalanceCard 
                title="Saídas" 
                value={expense}
                className="card" 
                icon="expense.svg" 
                alt="Icone de saidas" 
              />
                 <BalanceCard 
                title="Total" 
                value={total}
                className="card total" 
                icon="total.svg" 
                alt="Icone de total" 
              />
        </>}
        </Balance>

        <Transiction >
          <ScreenOnly>Transações</ScreenOnly>
          <NewTransaction onClick={_=>setActive(true)}>+ Nova Transação</NewTransaction>
          <DataTable id="data-table">
            <thead>
              <tr>
                <Th>Descrição</Th>
                <Th>Valor</Th>
                <Th>Data</Th>
                <Th></Th>
                <Th></Th>
              </tr>
            </thead>
            <tbody>
              {isLoaded && transactions.map(({ id, description: desc, amount, date }) => {
                    let value = Util.formatCurrency(amount);
                    const props = { setActive, id, desc, value, date };

                    return <Transaction
                      key={`R$${amount}-${id}`} {...props} />;
              })}
              
            </tbody>
          </DataTable>
        </Transiction>
      </Container>

      {notification && <Toast
        {...notification} 
      />}

      <Footer>
        <a href="https://github.com/Gustavo-Henrique-br/maratonaDiscover">
          <p>dev.finance$ - By Gustavo Henrique</p>
        </a>
      </Footer>

      {isActive && <Modal isActive={isActive} setActive={setActive} 
          title={innerDesc ? 'Editar Transação' : 'Criar Transação'}
          setNotification={setNotification}
          innerDesc={innerDesc} 
          innerAmount={innerAmount} 
          innerDate={innerDate}       
        />
      }
      
    </>
  )
}
