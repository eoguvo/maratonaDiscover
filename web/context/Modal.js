import React, { createContext, useState } from 'react';

const ModalContext = createContext({ isActive: false });

export const ModalProvider = ({ children }) => {
    const [isActive, setActive] = useState(false);

    return (
        <ModalContext.Provider value={{ isActive, setActive }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext;