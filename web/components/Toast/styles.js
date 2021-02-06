import styled, {css} from 'styled-components';

export const ToastOverlay = styled.span`
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
export const ToastWrapper = styled.span`
    animation: fadeIn .5s ease-in-out;
    height: 120px;
    max-width: 1000px;
    width: 90vw;
    background-color: var(--primary);
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: .25rem;
    box-shadow: 2px 6px 10px rgba(0, 0, 0, .4);
    padding: 12px;
    background-color: ${({bgColor})=>bgColor};
    position: relative;
    ${({Closing})=>Closing && css`
        opacity: 0;
        animation: fadeOut ${({fadeOutDelay})=>fadeOutDelay}ms linear;
    `}
`

export const Icon = styled.i`
    color: ${({color})=>color};
    font-size:32px;
    margin: 0 12px;
`;

export const NotificationWrapper = styled.span`
    margin: 0;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 82%;
    /* border: 5px solid black; */
`

export const Title = styled.h1`
    font-weight: 600;
    font-size: 1rem;
    line-height: 20px;
    color: ${({primaryText})=>primaryText || `var(--primary-text)`};
`

export const CloseButton = styled.i`
    top: 12px;
    color: ${({color})=>color};
    right: 12px;
    position: absolute;
    font-size: 1rem;
    z-index: 2;
`;
export const Description = styled.h1`
    font-size: .875rem;
    line-height: 20px;
    font-weight: 400;
    color: ${({secondaryText})=>secondaryText || `var(--secondary-text)`}
`;
