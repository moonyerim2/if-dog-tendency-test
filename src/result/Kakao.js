import React, { useEffect } from "react";
const KakaoShareButton = () => {
  useEffect(() => {
    createKakaoButton();
  }, []);
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_SHARE_KAKAO_LINK_KEY);
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: "타이틀",
          description: "#리액트 #카카오 #공유버튼",
          imageUrl: "IMAGE_URL", // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        social: {
          likeCount: 77,
          commentCount: 55,
          sharedCount: 333,
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: "앱으로 보기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };
  return (
    <div className="kakao-share-button">
      {/* Kakao share button */}
      <button id="kakao-link-btn">
        <img src="/icons/kakao.png" alt="kakao-share-icon" />
      </button>
    </div>
  );
};
export default KakaoShareButton;
// export const shareKakao = (route, title) => {
//   const script = document.createElement("script");
//   script.src = "https://developers.kakao.com/sdk/js/kakao.js";
//   script.async = true;
//   document.body.appendChild(script);

//   if (window.Kakao) {
//     const kakao = window.Kakao;

//     if (kakao.isInitialized()) {
//       kakao.init(process.env.REACT_APP_SHARE_KAKAO_LINK_KEY); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
//     }

//     const shareTitle = "만약 개라면 결과";
//     const shareDes = "개";
//     const shareImage =
//       "https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f431.svg";
//     const shareURL =
//       "https://legend-palm-1f1.notion.site/2-_-cce963197d034ae5b0ab4a1bd3530365";

//     console.log(kakao);
//     kakao.sendDefault({
//       objectType: "feed",
//       content: {
//         title: shareTitle,
//         description: shareDes,
//         imageUrl: shareImage,
//         link: {
//           mobileWebUrl: shareURL,
//           webUrl: shareURL,
//         },
//       },

//       buttons: [
//         {
//           title: "결과확인하기",
//           link: {
//             mobileWebUrl: shareURL,
//             webUrl: shareURL,
//           },
//         },
//       ],
//     });
//   }
// };
