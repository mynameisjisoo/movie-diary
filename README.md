# My Movie Diary

## React를 이용한 영화 검색 및 영화 리뷰 저장 사이트

### [✨ Demo Link ✨](https://movie-diary.netlify.app/)

### 1. 사용한 기술들

<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"> <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=black">

### 2. 이 프로젝트를 요약하자면

- 함수형 컴포넌트와 React Hooks을 통한 렌더링 최적화, 동적인 페이지 구현
- Post CSS를 이용한 CSS 모듈화, media query를 이용한 반응형 CSS styling
- Naver의 search API 이용
  - Postman, Axios를 활용한 API통신
  - CORS Issue 해결을 위한 proxy 서버 구축 (cors-anywhrere 프로젝트를 heroku에 연결하여 cors 프록시 서버 생성)
- Firebase Auth를 이용한 로그인 서비스
- Firebase realtime database를 이용한 유저 데이터 저장
- Netlify와 Github 연동을 통한 Continuous Deployment

### 3. Overview

#### 💻반응형 디자인

<img src=https://user-images.githubusercontent.com/84840032/142976834-5a593e50-d111-42a5-8866-90807c90e713.png>

### 3. Project

#### 🔑Login

<img src=https://user-images.githubusercontent.com/84840032/142976956-1c34aef0-99b9-4179-be7d-7e500e896967.png>

```
✨firebase라이브러리를 이용하여 로그인 서비스 제공함
✨Google 계정, Github 계정, 휴대폰 번호 인증으로 로그인 할 수 있음
```

<img src=https://user-images.githubusercontent.com/84840032/142977105-bb55e74f-9e62-4fd6-b18d-dffcffae1c2c.png

<img width="300px" src=https://user-images.githubusercontent.com/84840032/142977939-bb3f89af-69c2-44c2-a35d-073b299c83ae.jpg>
<img width="100%"src=https://user-images.githubusercontent.com/84840032/142977820-d8a7b74b-9c9b-4723-9a65-22b9ebd36425.png>

```
✨휴대폰번호 인증으로 로그인
```

<img width="100%" src=https://user-images.githubusercontent.com/84840032/142977676-bfde8452-c3d1-45e5-b0cd-72dce0377abc.gif>

```
✨ 로그인 하고 나면 로그아웃 전까지는 페이지를 벗어나도 로그인이 유지됨 (자동로그인)
```

<img width="100%" src=https://user-images.githubusercontent.com/84840032/142978012-db05fdbc-c22f-40b9-802f-c09372ddc9f6.gif>

```
✨ 로그아웃해도 제작한 명함의 데이터는 firebase realtime database에 저장되어
    같은 계정으로 로그인하면 자동으로 데이터를 불러옴
```

#### 🎨Search and Write a review

<img width="100%" src=https://user-images.githubusercontent.com/84840032/142978086-bd23aab6-930d-4853-b477-fe79fbcaf83f.gif>

```
✨ 왼쪽 form에 정보를 입력 후, Add 버튼을 누르면 오른쪽에 명함 카드 생섬됨
```

```

### 4. 이 프로젝트를 통해 배운 것

```

🌱 CORS의 개념과 해결 방법

```

### 아쉬운 점
```

- CORS ISSUE 해결을 위해 처음엔 http-proxy-middleware 를 이용해서 proxy를 설정했다.
  개발환경에서는 잘 동작해서 해결된 줄 알았지만 배포하고 나니 무용지물이라 여러 방법을 시도하는 시간을 많이 보냈다.
  heroku에 github 프로젝트를 연동해서 cors 프록시 서버 만드는 방법으로 해결했는데 왠지 어려울 것 같아서 이 방법을 나중에 시도한게 후회됐다. 이 삽질을 통해 부딪혀보기도 전에 겁먹고 길을 돌아가는 실수는 두번 안하리라 다짐했다.

```

```
