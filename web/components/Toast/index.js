import {ToastOverlay, ToastWrapper} from './styles'

export default function ToastComponent({notification='', type='info'}) {
    return (
    <ToastOverlay>
        <ToastWrapper>
            <h1>Hello</h1>
            <h1>jupiter the biggest planet of the system</h1>
        </ToastWrapper>
    </ToastOverlay>
    )
}