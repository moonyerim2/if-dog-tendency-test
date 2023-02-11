import React, { useEffect, useCallback, useState } from "react";
import KakaoShareButton from "./Kakao";
const Share = () => {
  const [text, setText] = useState("공유");
  const forceUpdate = useCallback(() => setText("공유"));
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div onClick={forceUpdate}>
      <KakaoShareButton />
    </div>
  );
};
export default Share;
