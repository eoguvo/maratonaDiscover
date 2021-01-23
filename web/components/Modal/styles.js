import styled, { css } from 'styled-components';

import { ScreenOnly } from'../../styles/Utils';

export const ModalOverlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    ${({isActive}) => !isActive && css`
        opacity: 0;
        visibility: hidden;
    `}
`;

export const ModalWrapper = styled.div`
    background-color: var(--primary);
    padding: 2.4rem;
    position: relative;
`;

export const Help = styled.small`
    
`;

export const FormWrapper = styled.div`

`;

export const Form = styled.form`

`;

export const InputGroup = styled.div`

`;

export const Actions = styled(InputGroup)``;

export const ActionButton = styled.button``;

export const Label = styled(ScreenOnly)`

`;

export const Input = styled.input`

`;