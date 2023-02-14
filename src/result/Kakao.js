import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 500px;
  height: 46px;

  background: #feeb00;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  font-weight: 700;
  font-size: 18px;

  margin-bottom: 20px;
`;

const Span = styled.span`
  margin-left: 10px;
`;

const Logo = styled.img`
  width: 24px;
`;

// 처음만 두번클릭해야 작동됨 / 창이여러개 나오는 듯 함
const KakaoShareButton = () => {
  useEffect(() => {
    createKakaoButton();
  }, []);

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
        container: '#kakaotalk-sharing-btn',
        objectType: 'feed',
        content: {
          title: 'IF-DOG',
          description: '#내가개라면 #어떤 #개일까?',
          imageUrl:
            'https://user-images.githubusercontent.com/75062526/218786683-d373c8be-52d6-4d51-bb38-cafe15269966.jpg',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '웹으로 보기!',
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
    <Btn id="kakaotalk-sharing-btn">
      {/* Kakao share button */}
      <Logo src="/kakao.png" />
      <Span>내 결과 공유하기</Span>
    </Btn>
  );
};

export default KakaoShareButton;
