import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 500px;
  height: 46px;

  background: #fa9d00;
  border-radius: 6px;
  cursor: pointer;

  font-weight: 700;
  font-size: 18px;
  line-height: 30px;

  color: #ffffff;
`;
function Retry() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return <Btn onClick={goHome}>다시하기</Btn>;
}

export default Retry;
