import Head from 'next/head'
import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';

import { Icon, Header, Logo, Container, Balance, H2, Transiction, DataTable, Th, Footer } from '../styles/home'
import BalanceCard from '../components/BalanceCard';
import Transaction from '../components/Transaction';

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
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous" />
      </Head>
      <Header>
        <Logo id="logo">dev.finance$</Logo>
        <Icon  onClick={toggleClick}>
            <i className={`fas fa-${switchclass}`}></i>
        </Icon>
      </Header>
      <Container>
        <Balance  id="balance">
          <H2>Balanço</H2>
          <BalanceCard title="Entradas" value="R$ 5.000,00" className="card"/>
          <BalanceCard title="Saídas" value="R$ 2.000,00" className="card"/>
          <BalanceCard title="Total" value="R$ 3.000,00" className="card total"/>
        </Balance>

        <Transiction >
          <H2>Transações</H2>

          <DataTable id="data-table">
            <thead>
              <tr>
                <Th className="semiBorderRadius" >Descrição</Th>
                <Th>Valor</Th>
                <Th>Data</Th>
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
    </>
  )
}
