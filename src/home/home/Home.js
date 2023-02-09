import React, {useState } from  "react";

const Home=()=>{
    const [move, setMove]=useState();

    const startClick=(event)=>{
    // move page2
    console.log("move page 2");
    
}
return (
    <div className="container">      
        <header>
            <h2>Hot 도그</h2>
        </header>
        <section>
            <h3>내가 개라면?</h3>
            {/* <img alt= insert_img> */}
            <p>Hot 도그를 먹은 당신,, 다음날 눈을 떠보니 강아지가 되어있었다..!!
                과연-? 나는 어떤 강아지 일까?</p>
        </section> 
        <button className="start-btn" onClick={startClick}> 시작하기 </button>
    
    </div>
    )   
}
export default Home;