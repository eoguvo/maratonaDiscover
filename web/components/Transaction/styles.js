import styled from 'styled-components';
export const Td = styled.td`
    background: var(--primary);
    padding: 1rem 2rem;
    font-weight: normal;
    color: ${({type}) => type ? (type=='income' ? '#12a454' : '#e92929') : "var(--text)"};
    &:first-child {
      border-radius: 0.25rem 0 0 0.25rem;
    }
    &:last-child {
      border-radius: 0 0.25rem 0.25rem 0;
    }
  `
  export const Tr = styled.tr`
    opacity: .7;
    &:hover{
        opacity: 1;
    }
  `

  export const Desc = styled(Td)`
  color: var(--dark-purple);
  `