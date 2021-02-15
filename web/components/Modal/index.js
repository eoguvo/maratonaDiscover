import React, { useContext, useState, useEffect } from 'react';
import { Input, InputGroup, Label, ModalOverlay, ModalWrapper, Help, Actions, CloseButton, SubmitButton, Title } from './styles'

import TransactionContext from '../../context/Transaction';
import CurrentTransactionContext from '../../context/CurrentTransaction';

import TransactionHandler from '../../Services/TransactionHandler'


const Modal = ({ isActive, setActive, title, innerDesc = '', innerAmount = '', innerDate = '', setNotification }) => {
    const { transactions, setTransactions } = useContext(TransactionContext);
    const transactionHandler = new TransactionHandler(transactions);

    const { currentTransaction, setCurrentTransaction } = useContext(CurrentTransactionContext);

    const [date, setDate] = useState(innerDate ? getDate(innerDate) : getDate());
    const [description, setDescription] = useState(`${innerDesc}`);
    const [amount, setAmount] = useState(innerAmount);
    const [id, setId] = useState('')

    useEffect(() => {
        let { id: _id, date: _date, description: _description, amount: _amount } = currentTransaction
        setDate(getDate(_date))
        setDescription(_description)
        setAmount(_amount)
        setId(_id)
    }, [currentTransaction])

    function getDate() {
        let location = navigator.location || 'pt-br'
        let [day,month,year] = new Date()
            .toLocaleDateString(location)
            .split('/')
        console.log(location, [day, month, year])
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    const HandleCancel = e => {
        setCurrentTransaction('');
        setActive(false);
        setNotification(
            {
                title: 'Operação cancelada com sucesso!',
                message: 'Melhor fazer isso outra hora mesmo...',
                type: "success",
                setNotification,
                fadeout: true
            })
    }


    const HandleSubmit = (e) => {
        e.preventDefault()
        if (!description || !amount || !date || !(amount != 0)) {
            return alert("Por favor, preencha todos os campos")
        }
        setAmount(parseInt(amount));
        setDescription('');
        setAmount('');
        setDate(getDate());
        setActive(false);
        setCurrentTransaction('')
        if (id != '') {
            const newTransactions = transactionHandler.addTransaction({
                description,
                amount,
                date
            })
            setTransactions(newTransactions)
        }
        else {
            const newTransactions = transactionHandler.updateTransaction(id, {
                description,
                amount,
                date,
                id
            })
            setTransactions(newTransactions)
        }
    }

    return (
        <ModalOverlay isActive={isActive}>
            <ModalWrapper>
                <div>
                    <Title>{title}</Title>
                    <form action="" onSubmit={HandleSubmit}>
                        <InputGroup>
                            <Label htmlFor="description">Descrição</Label>
                            <Input type="text" id='description' name="description" placeholder="Descrição"
                                onChange={e => setDescription(e.target.value)}
                                value={description || ""} />
                        </InputGroup>

                        <InputGroup>
                            <Label htmlFor="amount">Valor</Label>
                            <Input step='0.05' type="number" id='amount' name="amount" placeholder="0,00"
                                onChange={e => setAmount(e.target.value)}
                                value={amount || ""} />
                            <Help>
                                Use o sinal - (negativo) para despesas e , (virgula) para casas decimais
                            </Help>
                        </InputGroup>

                        <InputGroup>
                            <Label htmlFor="date">Data</Label>
                            <Input type="date" id='date' name="date"
                                onChange={e => setDate(e.target.value)}
                                value={date || ""} />
                        </InputGroup>

                        <Actions>
                            <CloseButton type="button" onClick={HandleCancel}
                            >Cancelar</CloseButton>
                            <SubmitButton>Enviar</SubmitButton>
                        </Actions>

                    </form>
                </div>
            </ModalWrapper>
        </ModalOverlay>
    )
}

export default Modal;
