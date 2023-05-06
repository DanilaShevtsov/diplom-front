import React from "react"

interface ModalProps {
    children: React.ReactNode
    onClose: () => void
}  

export function Modal({ children, onClose }: ModalProps) {
    return (
        <>
            <div 
                className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
                onClick={ onClose }
            />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-white p-4">
                <h1>Modal Window</h1>
                { children }
            </div>
        </>
    )
}