import Head from 'next/head'
import { useState } from 'react';

import { Icon, Header, Logo, Container, Balance, ScreenOnly, Transiction, NewTransaction, DataTable, Th, Footer } from '../styles/home';

import BalanceCard from '../components/BalanceCard';
import Transaction from '../components/Transaction';
import Modal from '../components/Modal';

export default function Home({ toggleTheme }) {
  const [switchclass, setswitchclass] = useState('sun');
  const toggleClick = () => {
    console.log('trigger')
    toggleTheme();
    setswitchclass(switchclass === 'sun' ? 'moon' : 'sun')
  }

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
              value="R$ 5.000,00" 
              className="card" 
              icon="income.svg" 
              alt="Icone de entradas" 
            />

          <BalanceCard 
              title="Saídas" 
              value="R$ 2.000,00" 
              className="card" 
              icon="expense.svg" 
              alt="Icone de saidas" 
            />

          <BalanceCard 
              title="Total" 
              value="R$ 3.000,00" 
              className="card total" 
              icon="total.svg" 
              alt="Icone de total" 
            />

        </Balance>

        <Transiction >
          <ScreenOnly>Transações</ScreenOnly>
          <NewTransaction>+ Nova Transação</NewTransaction>
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
              <Transaction
                desc="Luz"
                value="- R$ 500,00"
                date="23/01/2021"
              />
              <Transaction
                desc="Criação website"
                value="R$ 5.000,00"
                date="23/01/2021"
              />
              <Transaction
                desc="Internet"
                value="- R$ 200,00"
                date="23/01/2021"
              />
            </tbody>
          </DataTable>
        </Transiction>
      </Container>

      <Footer>
        <p>dev.finance$</p>
        <a href="https://github.com/Gustavo-Henrique-br/maratonaDiscover">Source Code</a>
      </Footer>

        <Modal />
    </>
  )
}
