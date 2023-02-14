import { useState } from 'react';
import ModalBasic from "./ModalBasic";


function Modal(){
    const[modalOpen, setModalOpen]=useState(false)//modal창 노출 여부 결정 
    const showModal=()=>{
        setModalOpen(true);//클릭일때만 오픈 
        
    };
    return (
        <div>
            <button onClick={showModal}>Open-CTA</button>
            {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
        </div>
    );
}
export default Modal;
