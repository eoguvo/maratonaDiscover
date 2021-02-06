import { useEffect, useState } from 'react'
import {ToastOverlay, ToastWrapper, NotificationWrapper, Icon, Title, Description, CloseButton} from './styles'

export default function ToastComponent({title='', message='', type='success', fadeout=true, timeout=5000, changeNotification=()=>{}}) {
    const [Closing, isClosing] = useState(false)
    const getType = {
        error: {color: '#FFE8E8', bgColor: '#EB5757', className: 'fas fa-ban',primaryText: '#fff', secondaryText: '#FFE8E8'},
        success: {color: '#6FCF97', bgColor: '', className: 'far fa-check-circle', primaryText: '', secondaryText: ''},
        alert: {color: '#6E5404', bgColor: '#F2C94C', className: 'fas fa-info-circle', primaryText: '#6E5404', secondaryText: '#866912'}
    }
   let ToastType = getType[type]
   function closeToast() {
        if(Closing || !title && !message) return '';
        isClosing(true);
        let interval = setInterval(() =>{
            changeNotification('');
            isClosing(false);
            console.log(`closing`, Closing)
            clearInterval(interval);
        }, 510);
        return () => clearInterval(interval);
    }
    useEffect(() =>{
        let interval = setInterval(() =>{
            closeToast()
            changeNotification('');
        }, timeout);
        return () => {
            clearInterval(interval);
        }
    }, [])
    return (
    <ToastOverlay>
        <ToastWrapper  fadeOutDelay={500} Closing={Closing} bgColor={ToastType.bgColor}>
            <Icon {...ToastType} />
            <NotificationWrapper text={ToastType.primaryText}>
                <Title primaryText={ToastType.primaryText}>
                    {title}
                </Title>
                <Description secondaryText={ToastType.secondaryText}>
                    {message}
                </Description>
            </NotificationWrapper>
            <CloseButton color={ToastType.color} className="fas fa-times cursor-pointer" onClick={closeToast}  />
        </ToastWrapper>
    </ToastOverlay>
    )
}