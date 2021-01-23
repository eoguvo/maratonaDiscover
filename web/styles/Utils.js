import styled from 'styled-components';

export const ScreenOnly = styled.h2`
    position: absolute;
    width: 1px;
    height: 1px;
    background-color: red;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
`;