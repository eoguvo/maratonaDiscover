import styled from 'styled-components';

export const ToastOverlay = styled.span`
    position: absolute;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
export const ToastWrapper = styled.span`
    height: 80px;
    max-width: 1000px;
    width: 90vw;
    background-color: var(--primary);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const NotificationWrapper = styled.h2``