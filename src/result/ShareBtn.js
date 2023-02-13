import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";

import KakaoShareButton from "./Kakao";

const Share = () => {
  const [, update] = useState({});
  const forceUpdate = useCallback(() => update({}));
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <KakaoShareButton />;
};
export default Share;
