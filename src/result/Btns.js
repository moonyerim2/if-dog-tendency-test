import Share from "./ShareBtn";
import Retry from "./RetryBtn";
import CtaModalBtn from "./CtaModalBtn.js";
function Btns() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Share />
      <Retry />
      <CtaModalBtn/>
    </div>
  );
}

export default Btns;
