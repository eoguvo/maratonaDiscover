import React, { useContext, useState } from 'react';
import { Input, InputGroup, Label, ModalOverlay, ModalWrapper, Help, Actions, CloseButton, SubmitButton, Title } from './styles'

import ModalContext from '../../context/Modal'
import TransactionContext from '../../context/Transaction';

const Modal = () => {
    const { isActive, setActive } = useContext(ModalContext);
    const { transactions, setTransactions } = useContext(TransactionContext);

    const [date,setDate] = useState(getDate());
    const [description,setDescription] = useState('');
    const [amount,setAmount] = useState(15.00);
    
    function getDate () {
        let d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        if(!description || !amount || !date) {
            return alert("Por favor, preencha todos os campos")
        }
        setAmount(parseInt(amount));
        console.log({
            description,
            amount,
            date
        })
        setDescription('');
        setAmount('');
        setDate(getDate());
        setTransactions([...transactions,
            { 
                description,
                amount,
                date
            }])
        setActive(false);
    }

    return (
        <ModalOverlay isActive={isActive}>
            <ModalWrapper>
                <div>
                    <Title>Nova Transação</Title>
                    <form action="" onSubmit={HandleSubmit}>
                        <InputGroup>
                            <Label htmlFor="description">Descrição</Label>
                            <Input type="text" id='description' name="description" placeholder="Descrição"
                            onChange={e=>setDescription(e.target.value)}
                            value={description} />
                        </InputGroup>

                        <InputGroup>
                            <Label htmlFor="amount">Valor</Label>
                            <Input  step='0.05' type="number" id='amount' name="amount" placeholder="0,00" 
                            onChange={e=>setAmount(e.target.value)}
                            value={amount} />
                            <Help>
                                Use o sinal - (negativo) para despesas e , (virgula) para casas decimais
                            </Help>
                        </InputGroup>

                        <InputGroup>
                            <Label htmlFor="date">Data</Label>
                            <Input type="date" id='date' name="date" 
                                onChange={e=>setDate(e.target.value)}  
                                value={date} />
                        </InputGroup>

                        <Actions>
                            <CloseButton type="button" onClick={_=>setActive(false)} >Cancelar</CloseButton>
                            <SubmitButton>Enviar</SubmitButton>
                        </Actions>

                    </form>
                </div>
            </ModalWrapper>
        </ModalOverlay>
    )
}

export default Modal;