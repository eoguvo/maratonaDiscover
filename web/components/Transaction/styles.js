import styled from 'styled-components';
import { lighten, cssVar } from 'polished';
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

  export const Edit = styled.img`
    width: 16px;
    height: 16px;
    opacity: 0;
    visibility: none;
    transition: all .3s ease-in-out;
    position: absolute;
    transform: translateX(120px);
    ${Tr}:hover & {
      opacity: 1;
      visibility: visible;
    }
  `;