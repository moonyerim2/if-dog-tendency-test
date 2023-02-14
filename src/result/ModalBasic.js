import React from "react";
import OzCtaBtns from "./OzCtaBtns";
import styled from "@emotion/styled";
//="from "./ModalBasic.module.css';
//import styled from "@emotion/styled";

const Wrapper=styled.div`
    position:absolute;
    width:330px;
    height:327px;
    top:50%;
    left:50%
    transform: translate(-50%, -50%);
    background-color:#FFC0B8;
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
                    backgroundColor:"tomato",
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