import Router from 'next/router';
import { useEffect } from 'react';

export default function Naver() {
  // useEffect(() => {
  //   const naver = (window as any).naver;
  //   let naverLogin: any;
  //   const login = () => {
  //     naverLogin = new naver.LoginWithNaverId({
  //       clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID, // ClientID
  //       callbackUrl: process.env.NEXT_PUBLIC_NAVER_REDIRECT_URL, // Callback URL
  //       isPopup: false, // 팝업 형태로 인증 여부
  //       loginButton: {
  //         color: 'green', // 색상
  //         type: 3, // 버튼 크기
  //         height: '60', // 버튼 높이
  //       }, // 로그인 버튼 설정
  //     });

  //     naverLogin.init();
  //   };
  //   const getToken = () => {
  //     const hash = Router.asPath.split('#')[1]; // 네이버 로그인을 통해 전달받은 hash 값
  //     if (hash) {
  //       const token = hash.split('=')[1].split('&')[0]; // token값 확인
  //       naverLogin.getLoginStatus((status: any) => {
  //         if (status) {
  //           // 로그인 상태 값이 있을 경우
  //           console.log(naverLogin.user); // 사용자 정보 조회

  //           if (!naverLogin.user.getAge()) {
  //             // 나이정보 제공을 동의하지 않았을 경우
  //             alert('나이 정보는 필수입니다.');
  //             naverLogin.reprompt(); // 정보제공창 다시 보여주기

  //             return;
  //           }

  //           // /naver 페이지로 token값과 함께 전달 (서비스할 땐 token 전달을 하지 않고 상태 관리를 사용하는 것이 바람직할 것으로 보임)
  //           // Router.push({
  //           //   pathname: '/naver',
  //           //   query: {
  //           //     token: token,
  //           //   },
  //           // });
  //         }
  //       });
  //     }
  //   };
  //   login();
  //   getToken();
  // }, []);

  return <div>네이버 로그인 했습니다.</div>;
}
