import styled, { css } from 'styled-components';

export const H3 = styled.h3`
    font-weight: normal;
    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const P = styled.p`
    font-size: 2rem;
    line-height: 3rem;
    margin-top: 1rem;
`;

export const Card = styled.div`
    background: var(--primary);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    margin-bottom: 2rem;
    color: var(--text);
    ${
    ({type}) => (type=='total' && css`
        background: var(--orange);
        color: white;
`) }`;

export const BalanceSkeleton = styled.div`
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    margin-bottom: 2rem;
    height: 174px;
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
`;
