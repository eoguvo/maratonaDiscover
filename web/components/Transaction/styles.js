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
    position: relative;
    &:hover{
        opacity: 1;
    }
  `

  export const Desc = styled(Td)`
  color: var(--dark-purple);
  `
export const TransactionSkeleton = styled.tr`
  width: 659px;
  height: 58px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
`;
  export const Edit = styled.img`
    color: var(--primary)
  `;
