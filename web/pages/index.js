import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BalanceCard from '../components/BalanceCard';
import Transaction from '../components/Transaction';

export default function Home() {
  return (
    <>
      <Head>
        <title>dev.finance$</title>
        <meta name="description" content="Um web app para te ajudar a controlar seus gastos" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,700;1,100;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.logo} id="logo">dev.finance$</h1>
      </header>
      <main className={styles.container}>
        <section className={styles.balance} id="balance">
          <h2 className={styles.balanceH2} >Balanço</h2>
          <BalanceCard title="Entradas" value="R$ 5.000,00" className="card"/>
          <BalanceCard title="Saídas" value="R$ 2.000,00" className="card"/>
          <BalanceCard title="Total" value="R$ 3.000,00" className="card total"/>
        </section>

        <section id="transaction">
          <h2>Transações</h2>

          <table id="data-table">
            <thead>
              <tr>
                <th className="semiBorderRadius" >Descrição</th>
                <th>Valor</th>
                <th>Data</th>
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
          </table>
      </section>
      </main>

      <footer className={styles.footer}>
        <p>dev.finance$</p>
      </footer>
    </>
  )
}
