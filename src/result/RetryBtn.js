import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RetryBtn() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return <button onClick={goHome}>Retry</button>;
}

export default RetryBtn;
