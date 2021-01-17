import styled from 'styled-components';
export const Td = styled.td`
    background: var(--primary);
    padding: 1rem 2rem;
    font-weight: normal;
    max-width: 100vw;
    color: ${({type}) => type ? (type=='income' ? '#12a454' : '#e92929') : "var(--text)"};
  `
  export const Tr = styled.tr`
    opacity: .7;
    width: 100%;
    &:hover{
        opacity: 1;
    }
  `

  export const Desc = styled(Td)`
  color: var(--dark-purple);
  `