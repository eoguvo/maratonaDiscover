import styled from 'styled-components';
export const Container = styled.main`
    width: min(90vw, 800px);
    margin: auto;
`;
export const Icon = styled.button`
    position: fixed;
    top: 15px;
    right: 15px;
    font-size: 24px;
    background: none;
    cursor: pointer;
    color: ${({theme})=>theme.title == 'dark' ? '#FFEB3B' : '#FFC107' };
`;
export const Header = styled.header`
    background: linear-gradient(to right, #FFA62E, #EA4D2C);
    padding: 2rem 0 10rem;
    text-align: center;
`;

export const Logo = styled.h1`
    background: linear-gradient(90deg, #5650de, #f869d5);
    background-clip: text;
    letter-spacing: -0.2rem;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3rem;
    font-weight: 700;
`;
export const Balance = styled.section`
    margin-top: -8rem;
`;
export const H2 = styled.h2`
    color: var(--dark-purple);
    font-weight: 600;
    margin-top: 0;
    `;
    export const Transiction = styled.section`
        width: 100%;
        overflow-x: auto;
    `;
export const DataTable = styled.table`
    width: 100%;
    border-spacing: 0 0.5rem;
    color: #969cb3;
`;
export const Th = styled.th`
    background: var(--primary);
    color: var(--dark-purple);
    font-weight: normal;
    padding: 1rem 2rem;
    text-align: left;
`;
export const Footer = styled.footer`
    text-align: center;
    padding: 4rem 0 2rem;
    color: var(--dark-purple);
    opacity: 0.6;
`;