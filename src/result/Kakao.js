import React, { useEffect, useCallback, useState } from "react";

// 처음만 두번클릭해야 작동됨 / 창이여러개 나오는 듯 함
const KakaoShareButton = () => {
  const [text, setText] = useState("공유");
  const forceUpdate = useCallback(() => setText("공유"));

  useEffect(() => {
    createKakaoButton();
    setText("share");
  }, [text]);

  // !!!!! [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_SHARE_KAKAO_LINK_KEY);
      }

      kakao.Share.createDefaultButton({
        container: "#kakaotalk-sharing-btn",
        objectType: "feed",
        content: {
          title: "IF-DOG",
          description: "#내가개라면 #어떤 #개일까?",
          imageUrl:
            "https://littledeep.com/wp-content/uploads/2019/04/littledeep_puppy_sns.png",
          link: {
            mobileWebUrl: "https://naver.com",
            webUrl: "https://naver.com",
          },
        },
        buttons: [
          {
            title: "웹으로 보기!",
            link: {
              mobileWebUrl: "https://naver.com",
              webUrl: "https://naver.com",
            },
          },
        ],
      });
    }
  };

  return (
    <div className="kakao-share-button">
      {/* Kakao share button */}
      <button id="kakaotalk-sharing-btn" onClick={forceUpdate}>
        <img src="/icons/kakao.png" alt="kakao-share-icon" />
      </button>
    </div>
  );
};
export default KakaoShareButton;
