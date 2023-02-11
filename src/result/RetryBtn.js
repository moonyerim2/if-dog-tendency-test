import { useNavigate } from "react-router-dom";

function Retry() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return <button onClick={goHome}>Retry</button>;
}

export default Retry;
