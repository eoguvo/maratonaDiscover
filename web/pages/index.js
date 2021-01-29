import Head from 'next/head'
import { useState, useContext, useEffect } from 'react';

import { Icon, Header, Logo, Container, Balance, Transiction, NewTransaction, DataTable, Th, Footer } from '../styles/home';
import { ScreenOnly } from '../styles/Utils'

import BalanceCard from '../components/BalanceCard';
import Transaction from '../components/Transaction';
import Modal from '../components/Modal';

import ModalContext from '../context/Modal';
import TransactionContext from '../context/Transaction';

import Util from '../utils/index.js';

import TransactionHandler from '../Services/TransactionHandler';

export default function Home({ toggleTheme }) {
  const [switchclass, setswitchclass] = useState('sun');
  const [income, setIncome] = useState([])
  const [expense, setExpense] = useState([])

  const { setActive } = useContext(ModalContext);
  const { transactions, setTransactions } = useContext(TransactionContext);
  const toggleClick = () => {
    toggleTheme();
    setswitchclass(switchclass === 'sun' ? 'moon' : 'sun')
  }

  const transactionHandler = new TransactionHandler(transactions);

  useEffect(()=>{
    const [currentExpenses, currentIncomes] = 
        transactionHandler.getValues()
    setExpense(currentExpenses);
    setIncome(currentIncomes);
    transactionHandler.updateTransaction(transactions)
    setTransactions(transactions);
  }, [transactions])

  return (
    <>
      <Head>
        <title>dev.finance$</title>
        <meta name="description" content="Um web app para te ajudar a controlar seus gastos" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous" />
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
          <BalanceCard 
              title="Entradas" 
              value={Util.formatCurrency(income)}
              className="card" 
              icon="income.svg" 
              alt="Icone de entradas" 
            />

          <BalanceCard 
              title="Saídas" 
              value={Util.formatCurrency(expense)}
              className="card" 
              icon="expense.svg" 
              alt="Icone de saidas" 
            />

          <BalanceCard 
              title="Total" 
              value={Util.formatCurrency(income + expense)}
              className="card total" 
              icon="total.svg" 
              alt="Icone de total" 
            />

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
              </tr>
            </thead>
            <tbody>
              {transactions.map(({id, description: desc, amount, date})=>{
                let value = Util.formatCurrency(amount);
                const props = {id, desc,value, date}
                return <Transaction 
                        key={id} {...props}
                      />
              })}
            </tbody>
          </DataTable>
        </Transiction>
      </Container>

      <Footer>
        <a href="https://github.com/Gustavo-Henrique-br/maratonaDiscover">
          <p>dev.finance$ - By Gustavo Henrique</p>
        </a>
      </Footer>

        <Modal />
    </>
  )
}
