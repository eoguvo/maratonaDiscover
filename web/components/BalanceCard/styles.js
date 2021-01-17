import styled, { css } from 'styled-components';

export const Card = styled.div`
    background: var(--primary);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    margin-bottom: 2rem;
    color: var(--text);
    ${
    ({type}) => (type=='total' && css`
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        margin-bottom: 2rem;
        background: #EA4D2C;
        color: white;
    `)}`;
export const H3 = styled.h3`
    font-weight: normal;
    font-size: 1rem;
`;
export const P = styled.p`
    font-size: 2rem;
    line-height: 3rem;
    margin-top: 1rem;
`;