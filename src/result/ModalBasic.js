import React from "react";
import OzCtaBtns from "./OzCtaBtns";
import styled from "styled-components";
//="from "./ModalBasic.module.css';
//import styled from "@emotion/styled";

const Wrapper=styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, 50%);
    width:330px;
    height: 170px;
    background-color:#FFFF;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius:8px;
`;
function ModalBasic({ setModalOpen }){

    const closeModal=()=>{
        setModalOpen(false);
        console.log("bye modal");
    };

    return(
        <Wrapper>
            <button 
                className="close" 
                style={{
                    position: "absolute",
                    right: 10,
                    top:10,
                    color: "red",
                    border:"none"
                }}
                onClick={closeModal}>
            X
            </button>
            <OzCtaBtns/>
        </Wrapper>
    );
}
export default ModalBasic;