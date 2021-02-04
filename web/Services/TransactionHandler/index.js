import Util from "../../utils/index.js";

class TransactionHandler{
    #transactions;
    constructor(transactions = []) {
        this.#transactions = transactions;
        this.init();
    }
    init() {
        this.#transactions = this.#transactions.map((transaction, index) => {
            transaction.id = transaction.id || index;
            if(/-/g.test(transaction.date)) {
                transaction.date = Util.formatDate(transaction.date);
            }
            return transaction;
        })
        return this.#transactions.sort((a, b) => a.id-b.id);
    }
    getValues() {
        if(!this.#transactions) return [0, 0];
        let currentExpenses = [];
        let currentIncomes = [];
        this.#transactions.forEach(({amount})=>{
          amount = Number(amount)
          if(/^-/.test(amount)) {
            return currentExpenses.push(amount);
          }
          currentIncomes.push(amount);
        })
        const sumArray = array => {
            if(array.length == 0) return []
            return array.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
            });
        }
        console.log("Expenses: ",currentExpenses.join(', '))
        console.log("Incomes: ",currentIncomes.join(', '))
        currentIncomes = sumArray(currentIncomes);
        currentExpenses = sumArray(currentExpenses);
        return [currentExpenses, currentIncomes];
    }

    addTransaction(transaction) {
        this.#transactions.push(transaction);
        return this.#transactions;
    }

    removeTransaction(id) {
        this.#transactions = this.#transactions.filter(transaction => {
            return transaction.id != id;
        })
        return this.#transactions;
    }
    updateTransaction(id, newTransaction) {
        this.#transactions.forEach(transaction =>{
            if(transaction.id !== id) {
                return;
            }
            this.#transactions[transaction] = newTransaction;
        })
        return this.#transactions;
    }
    reload(transactions) {
        this.#transactions = transactions;
        this.init();
    }
}

export default TransactionHandler;