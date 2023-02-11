import React, { useEffect } from "react";

// !!!!! [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함

const KakaoShareButton = () => {
  useEffect(() => {
    createKakaoButton();
  }, []);
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;

      console.log(kakao);
      console.log(kakao.Share);
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
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
        social: {
          likeCount: 286,
          commentCount: 45,
          sharedCount: 845,
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
      <button id="kakaotalk-sharing-btn">
        <img src="/icons/kakao.png" alt="kakao-share-icon" />
      </button>
    </div>
  );
};
export default KakaoShareButton;
