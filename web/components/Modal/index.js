import React, { useContext, useState } from 'react';
import { Input, InputGroup, Label, ModalOverlay, ModalWrapper, Help, Actions, CloseButton, SubmitButton, Title } from './styles'

import ModalContext from '../../context/Modal'

const Modal = () => {
    const { isActive, setActive } = useContext(ModalContext);
    const [date,setDate] = useState(getDate())
    function getDate () {
            var d = new Date(),
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
                            <Input type="text" id='description' name="description" placeholder="Descrição" />
                        </InputGroup>

                        <InputGroup>
                            <Label htmlFor="amount">Valor</Label>
                            <Input  step='0.05' type="number" id='amount' name="amount" placeholder="0,00" />
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
                            <CloseButton onclick={_=>setActive(false)} >Cancelar</CloseButton>
                            <SubmitButton>Enviar</SubmitButton>
                        </Actions>

                    </form>
                </div>
            </ModalWrapper>
        </ModalOverlay>
    )
}

export default Modal;