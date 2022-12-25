import React from "react";


interface Props {
    content: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    handleClose: any
}


export const Popup: React.FC<Props> = ({ content, handleClose }) => {

    return (
        <div className="popup-box fixed top-0 left-0 w-full h-screen bg-[#00000050]">
            <div className="box my-0 mx-auto flex p-5 bg-[#fff">
                <>
                    <span className="close-icon cursor-pointer bg-[#ededed] text-center text-xl" onClick={handleClose}>x</span>
                    {content}
                </>
            </div>
        </div>
    );
}

