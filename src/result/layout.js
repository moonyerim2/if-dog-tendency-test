import React, { useEffect } from "react";
import KakaoShareButton from "./Kakao";
const Layout = () => {
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
    <div>
      <KakaoShareButton />
    </div>
  );
};
export default Layout;
