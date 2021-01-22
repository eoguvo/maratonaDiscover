import React from 'react';
import { ModalOverlay, ModalWrapper } from './styles'
import Image from 'next/image';


const Modal = () => {
    return (
        <ModalOverlay isActive={false}>
            <ModalWrapper>
                <div className="form">
                    <h2>Nova Transação</h2>
                    <form action="">
                        <div className="input-group">
                            <label htmlFor="description"></label>
                            <input type="text" id='description' name="description" />
                        </div>
                    </form>
                </div>
            </ModalWrapper>
        </ModalOverlay>
    )
}

export default Modal;