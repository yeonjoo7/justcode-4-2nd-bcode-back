<img width="950" alt="로고" src="https://raw.githubusercontent.com/wecode-bootcamp-korea/justcode-4-2nd-bcode-front/f3c5bb2422af30bc015ad352686fe2983c99f024/public/image/logo.svg">

## ARUITAUM

<br />
<img width="900" alt="시연영상 썸네일" src="https://github.com/wecode-bootcamp-korea/justcode-4-2nd-bcode-front/blob/develop/public/image/movieCapture.png?raw=true">
🎬 [ARUITAUM 구현영상 보러 가기](https://youtu.be/An_Ny27okSk)

<br/>

## Introduction

<br/>

- 아름다운 사람들이 가꾸는 아름다운 공간이라는 뜻의 아리따움 클론 프로젝트
- 웹 사이트의 기본적인 기능을 실제 서비스가 가능한 수준으로 구현시키기 위해 디자인만 참고해서 직접 구현했습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 백엔드 서버와 통신한 내용으로 아래 데모 영상이 제작되었습니다.
- 진행 기간 : 2022.04.18 ~ 2022.04.29 (12일)
- [Front-end GitHub 바로가기](https://github.com/wecode-bootcamp-korea/justcode-4-2nd-bcode-front.git)

<br/>

## DB Modeling

<br/>

<img width="882" alt="DB 스크린샷" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1bbb61ee-b71a-4a77-b8a0-96cb0ba0ea5e/aruitaumDB.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220503T030203Z&X-Amz-Expires=86400&X-Amz-Signature=566e9a139c17b31f6594e9bba8feafca220d95311bd69b1754e9536ec4fae809&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22aruitaumDB.PNG.png%22&x-id=GetObject">

<br/>

## 담당자 별 구현 기능

**[Back]**

<br/>

👩‍💻 김연주

✨1. 제품 API✨

- 상세 페이지에 전달할 정보를 제품 정보와 함께 총 리뷰 갯수, 평균 별점, 리뷰의 좋아요 수를 집계하여 같이 반환
- 로그인한 유저가 작성한 리뷰는 리뷰에 대한 좋아요 정보를 같이 
- 최근 본 상품의 정보 제공하는 기능 구현

✨2. 장바구니 API✨

- 장바구니 추가, 수량 수정을 같은 화면의 같은 버튼을 눌러도 자동으로 계산되도록 구현
- 장바구니에서 제품 삭제, 전체 삭제, 조회 기능 구현

✨3. 후기 API✨

- multer, fs, path 라이브러리를 이용하여 서버로 이미지를 업로드받고
  프론트에서 요청시 express의 기본 제공 미들웨어 함수인 static을 이용하여
  이미지 주소로 바로 접근할 수 있도록 제공하는 기능 구현
- 각 리뷰마다 좋아요, 좋아요 취소 기능 구현

✨4. 채팅 API✨

- WebSocket 프로토콜을 이용하여 간단한 채팅 기능 구현

<br/>

🧑‍💻 송정석

1. 회원가입 API
- 유저네임, 이메일, 패스워드를 입력 받아 회원 가입을 진행
- 유저정보가 없다면 받아온 패스워드 정보를 bcrypt로 암호화를 진행 해서 유저의 정보를 저장

2. 로그인 API

- 이메일과 비밀번호를 받아서 DB의 일치하는 메일이 있는지 확인한다.
- DB에 일치하는 메일이 있다면 DB에 등록된 암호와 입력받은 암호를 암호화 진행하여 비교한다.

3. Validate Token

- req.headers.authorization에서 토큰을 받아서 토큰 검증작업 진행.
- 토큰을 시크릿키로 복호화후 인가 작업 진행.

4. Category API

- Path 파라미터와 Quary 파라미터를 동시에 사용하여 입력을 받아온다.
- 파라미터의 조건에 따라 필터된 정보를 가져온다.

<br/>
<br/>

**[Front]**

<br/>

🧑‍💻 김영서

1. Nav 바 구현

- 검색기능 구현 (최근검색어, 검색어 자동완성)
- 최근본 상품 모달 구현 (상품 상세페이지 들어가면 자동으로 모달 리스트)
- 장바구니 모달 구현 (장바구니에 담겨 있는 상품 보여줌)
- 카테고리 모달 구현

2. Footer 구현

- 페이지 상단으로 이동하는 버튼 구현
- 채팅 모달 구현 (유저간 실시간 채팅)

3. 메인 캐러셀 구현

- 이미지 3장을 이용해 무한 슬라이드 구현
- 3초에 한 번씩 자동으로 슬라이드
- 양 옆으로 이동하는 버튼 클릭시 자동 슬라이드 멈춤

<br/>

🧑‍💻 이경원

1. 카드 컴포넌트 제작

- 캐러셀, 카테고리 및 검색 결과 페이지 공통 사용

2. 카테고리 페이지

- 카테고리 버튼 클릭하여 해당 카테고리 상품 호출
- 리뷰 순, 가격 순 함수 구현

3. 검색 결과 페이지

- 검색어에 대한 상품 호출

4. 메인 페이지 카테고리 상품 캐러셀

- 이미지 1x4 캐러셀 제작
- 좌, 우 버튼 클릭하면 이미지 2장씩 이동

<br/>

🧑‍💻 이슬아

1. 로그인 페이지

- 로그인 유효성 검사 기능
- 로그인 회원 데이터 검증 후 서버에 요청

2. 회원가입 페이지

- 회원가입 유효성 검사 기능
- 전체 체크박스 기능
- 회원가입 데이터 검증 후 서버에 요청

3. 장바구니 페이지

- 수량에 따른 상품 가격 계산 기능

<br/>

🧑‍💻 최정환

1. 상세 페이지 (제품 정보)

- 통신
  - 제품의 정보 GET
  - 제품의 개수와 id를 장바구니DB에 POST
- 제품의 id들을 localStorage에 저장
- 제품의 갯수에 따라 총 가격을 계산해 표현

2. 상세 페이지 (리뷰)

- 리뷰 CURD
  - POST를 통해 리뷰 생성 (사진, 내용, 별점)
  - PUT을 통해 리뷰 내용 update
  - DELETE를 통해 리뷰 삭제
  - GET을 통해 제품에 해당하는 리뷰들을 불러옴
- 리뷰 정렬
  - 날자순, 별점의 높낮이순을 정렬한다.

3. 메인 추천 carousel

- 더보기 버튼을 통해 5개씩 다른 제품을 2번 나오게 함

<br/>
<br/>

## Members

<br/>

- 김연주: [기술 블로그](https://velog.io/@yeonjoo7)
- 송정석: [기술 블로그](https://velog.io/@silversjs)
- 김영서 : [기술 블로그](https://youngseokim-kr.github.io/)
- 이경원 : [기술 블로그](https://velog.io/@kwleee91)
- 이슬아 : [기술 블로그](https://velog.io/@pingu944)
- 최정환 : [기술 블로그](https://velog.io/@wjdghks963)


<br/>

## Reference

<br/>

- 이 프로젝트는 [아리따움](https://www.aritaum.com/-KR/) 사이트를 참조하여 학습 목적으로 만들었습니다.
- 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 모든 이미지들은 무료 이미지 및 자가제작 이미지들입니다.
