import React, { createContext, ReactNode, useContext } from "react";
import { toast, ToastContainer, ToastOptions } from "react-toastify";

interface showToastProps {
    message: string;
    type: 'success' | 'error' | 'info' | 'warn';
    options?: ToastOptions;
}
interface ToastContextProps {
    showToast: (message: string, type?: 'success' | 'error' | 'info' | 'warn', options?: ToastOptions) => void;
}
export const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const showToast = (message: string, type?: 'success' | 'error' | 'info' | 'warn', options?: ToastOptions) => {
        switch (type) {
            case 'success':
                toast.success(message, options);
                break;
            case 'error':
                toast.error(message, options);
                break;
            case 'warn':
                toast.warn(message, options);
                break;
            case 'info':
                toast.info(message, options);
                break;
            default:
                break;
        }
    }
    return (
        <>
            <ToastContext.Provider value={{ showToast }}>
                {children}
                {/* Must be outside children, but inside provider */}
                <ToastContainer position="top-right" autoClose={3000} />
            </ToastContext.Provider>
        </>
    )
}

export const UseToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastContextProvider");
    }
    return context;
}