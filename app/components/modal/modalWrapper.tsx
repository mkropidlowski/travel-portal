"use client";
import { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "../icons";

type ModalProps = {
    show: boolean;
    onClose: Function;
    title?: string;
    children: React.ReactNode;
    maxWidth: number;
    bgColor: string;
};
const ModalWrapper: FC<ModalProps> = ({ show, onClose, children, title, bgColor, maxWidth, ...rest }) => {
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
            className="fixed bg-transparent flex items-center justify-center w-screen h-full top-0 left-0 z-[1000]"
            onClick={handleOverlayClick}
        >
            <div
                className="p-4 rounded-lg border-[3px] border-stone-300 shadow-md overflow-x-auto"
                style={{ maxWidth: `${maxWidth}px`, background: `${bgColor}` }}
                {...rest}
            >
                <div className="flex justify-between items-center">
                    <h2 className="font-medium text-base">{title}</h2>
                    <CloseIcon onClick={handleCloseClick} width={25} height={25} className="cursor-pointer" />
                </div>
                <div className="p-4 overflow-y-auto max-h-[60vh]">{children}</div>
            </div>
        </div>
    );

    if (!isMounted || !show) {
        return null;
    }
    return ReactDOM.createPortal(ModalComponent(), document.getElementById("modal-root") as HTMLElement);
};

export default ModalWrapper;

// how to use modal :
// add "use client"
// paste  const [showModal, setShowModal] = useState(false);
// insert  <button onClick={() => setShowModal(true)}>Button name</button>

// EXAMPLE
{
    /* <button onClick={() => setShowModal(true)}>open modal_2</button>
<ModalWrapper onClose={() => setShowModal(false)} show={showModal} title="TEST_1" maxWidth={500}>
    <h2 className="w-[500px]">elo</h2>
</ModalWrapper> */
}
