"use client";
import { FC, useEffect, useState } from "react";
import Button from "@/app/components/button/button";
import ReactDOM from "react-dom";

type ModalProps = {
    show: boolean;
    onClose: Function;
    title?: string;
    children: React.ReactNode;
};
const Modal: FC<ModalProps> = ({ show, onClose, children, title }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleCloseClick = () => {
        onClose();
    };
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const ModalComponent = () => (
        <div
            className="fixed bg-black flex items-center justify-center w-screen h-screen top-0 left-0 z-[1000]"
            onClick={handleOverlayClick}
        >
            <div className="bg-white p-4 max-w-[800px] rounded-lg">
                <div className="flex justify-between items-center">
                    <h2>{title}</h2>
                    <Button type="button" secondary onClick={handleCloseClick}></Button>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );

    if (!isMounted || !show) {
        return null;
    }
    return ReactDOM.createPortal(ModalComponent(), document.getElementById("modal-root") as HTMLElement);
};

export default Modal;

// how to use modal :
// add "use client"
// paste  const [showModal, setShowModal] = useState(false);
// insert  <button onClick={() => setShowModal(true)}>Button name</button>
