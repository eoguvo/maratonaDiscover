import styled, { css } from 'styled-components';

import { ScreenOnly } from'../../styles/Utils';

import { lighten } from 'polished';

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
    width: 70%;
    max-width: 500px;
    border-radius:.5rem;
    border: 1px solid var(--orange);
    box-shadow: 1px 1px 10px #CCC;
    @media(max-width: 800px) {
        width: 90%
    }
`;

export const Help = styled.small`
    color: var(--text);
    opacity: .4;
`;

export const Title = styled.h2`
    color: var(--orange);
`;

export const InputGroup = styled.div`
    margin-top: .8rem;
`;

export const Label = styled(ScreenOnly)`

`;

export const Input = styled.input`
    border-radius: .2rem;
    padding: .8rem;
`;

export const Actions = styled(InputGroup)`
    display: flex;
    justify-content: space-between;
    align-items:center;
`;

const DefaultButton = styled.button`
    width: 48%;
    height: 50px;
    border-radius: .25rem;
    padding: 0;
    cursor: pointer;
`;

export const CloseButton = styled(DefaultButton)`
    border: 2px solid var(--orange);
    color: var(--orange);
    font-weight: bold;
    background-color: var(--primary);
    opacity: .7;
    &:hover {
        opacity: 1;
    }
    &:focus {
        color: var(--primary);
        background-color: var(--orange);
    }
`;

export const SubmitButton = styled(DefaultButton)`
    color: var(--primary);
    background-color: var(--orange);
    &:hover {
        background-color: ${lighten(.05, '#EA4D2C')}
    }
`;