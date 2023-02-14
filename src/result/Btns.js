import Share from "./ShareBtn";
import Retry from "./RetryBtn";
import OzCtaBtns from "./OzCtaBtns";

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
      <OzCtaBtns />
    </div>
  );
}

export default Btns;
