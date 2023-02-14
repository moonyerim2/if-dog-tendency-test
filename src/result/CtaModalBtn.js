import { useState } from 'react';
import ModalBasic from "./ModalBasic";
import styled from "styled-components";

const Btn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 46px;

    background: #1552F0;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    font-weight: 700;
    font-size: 18px;
    color: white;
    
    margin-bottom:80px;
`;
function CtaModalBtn(){
    const[modalOpen, setModalOpen]=useState(false)//modal창 노출 여부 결정 
    const showModal=()=>{
        setModalOpen(true);//클릭일때만 오픈   
    };
    return (
        <div style={{maxWidth:"500px", width:"100%", marginTop:"20px"}}>
            <Btn onClick={showModal}>MORE</Btn>
            {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
        </div>
    );
}
export default CtaModalBtn;
