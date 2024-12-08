# 다중 주식 관리 시스템 - 개발 TODO 리스트

## Phase 1: 프로젝트 초기 설정 (1주)
### 개발 환경 구성
- [x] Node.js v20.11.1 (LTS) 설치
- [x] Vite + React + TypeScript 프로젝트 생성
- [x] ESLint, Prettier 설정
- [x] Git 저장소 설정 및 초기화

### 기본 패키지 설치
- [x] 상태관리: Zustand 설정
  - [x] 스토어 타입 정의 (store.ts)
  - [x] 테마 스토어 구현 (themeStore.ts)
  - [x] 주식 스토어 구현 (stockStore.ts)
  - [x] 스타일드 컴포넌트 타입 정의 (styled.d.ts)
- [x] API 통신: React Query 설정
  - [x] API 타입 정의 (api.ts)
  - [x] QueryClient 설정 (queryClient.ts)
  - [x] API 유틸리티 함수 (api.ts)
  - [x] 커스텀 훅 생성 (useStocks.ts)
  - [x] QueryClientProvider 설정 (App.tsx)
- [x] 차트: Recharts 설치
  - [x] Recharts 패키지 설치
  - [x] 기본 차트 컴포넌트 생성 (StockLineChart.tsx)
- [x] 스타일: CSS-in-JS 라이브러리 설치
  - [x] styled-components 설치
  - [x] 글로벌 스타일 설정 (GlobalStyle.ts)
  - [x] 테마 프로바이더 설정 (App.tsx)

## Phase 2: 디자인 시스템 구축 (1주)
### 테마 설정
- [x] 다크/라이트 모드 색상 정의
  - [x] 기본 배경색, 주요 색상, 보조 색상 설정
  - [x] 텍스트 색상 계층 구조 설정
- [x] 타이포그래피 시스템 구축
  - [x] Noto Sans Korean 폰트 설정
  - [x] 제목/본문/캡션 크기 정의
- [x] 스페이싱/그리드 시스템 정의

### 공통 컴포넌트 개발
- [x] 버튼 컴포넌트
- [x] 입력 필드 컴포넌트
- [x] 선택 컴포넌트 (Select)
- [x] 테이블 컴포넌트
- [x] 카드 컴포넌트
- [x] 모달 컴포넌트

## Phase 3: 레이아웃 및 페이지 구축 (2주)
### 레이아웃 구축 [진행 중]
- [x] 헤더 컴포넌트
  - [x] 로고 표시
  - [x] 테마 토글 버튼
  - [x] 모바일 메뉴 버튼
- [x] 사이드바 컴포넌트
  - [x] 네비게이션 메뉴
  - [x] 활성 메뉴 표시
  - [x] 모바일 토글 기능
- [x] 푸터 컴포넌트
  - [x] 저작권 정보
  - [x] 유틸리티 링크
- [x] 반응형 레이아웃 구현
  - [x] 모바일 사이드바 오버레이
  - [x] 반응형 여백 조정
  - [x] 브레이크포인트 설정

### 페이지 구축 [진행 중]
- [x] 거래 입력 폼 개발
  - [x] 거래일자 선택 기능
  - [x] 국가 선택 (KOR/USA)
  - [x] 증권사 선택 기능
  - [x] 티커명/종목명 연동 기능
  - [x] ���수/매도 선택
  - [x] 수량/단가 입력 (천단위 구분)
  - [x] 통화 자동 변환 기능
  - [x] 저장 버튼 추가
  - [x] 달력 아이콘 표시

### 거래현황 모듈
- [x] 거래 입력 폼 개발
  - [x] 거래일자 선택 기능
  - [x] 국가 선택 (KOR/USA)
  - [x] 증권사 선택 기능
  - [x] 티커명/종목명 연동 기능
  - [x] 매수/매도 선택
  - [x] 수량/단가 입력 (천단위 구분)
  - [x] 통화 자동 변환 기능

- [ ] 거래 리스트 테이블 개발
  - [ ] 테이블 기본 구조 설계
    - [ ] 컬럼 구성: 거래일자, 국가, 증권사, 티커, 종목명, 거래유형, 수량, 단가, 총액
    - [ ] 반응형 테이블 레이아웃
    - [ ] 스크롤 기능
  
  - [ ] 데이터 표시 기능
    - [ ] 거래일자 포맷팅 (YYYY-MM-DD)
    - [ ] 매수/매도 색상 구분 (매수: 빨간색, 매도: 초록색)
    - [ ] 수량/단가/총액 천단위 구분
    - [ ] 통화 기호 표시 (KRW/USD)
  
  - [ ] 데이터 관리 기능
    - [ ] 거래 내역 수정 기능
    - [ ] 거래 내역 삭제 기능
    - [ ] 확인 팝업 (삭제 시)
  
  - [ ] 필터링 및 정렬 기능
    - [ ] 날짜별 정렬
    - [ ] 국가별 필터링
    - [ ] 증권사별 필터링
    - [ ] 거래유형별 필터링
  
  - [ ] 페이지네이션
    - [ ] 페이지 크기 선택
    - [ ] 페이지 이동 버튼
    - [ ] 현재 페이지 표시

### 통계현황 모듈
- [ ] 포트폴리오 대시보드
  - [ ] 총 자산 현황
  - [ ] 국가별 분포
  - [ ] 증권사 분포
- [ ] 데이터 시각화
  - [ ] 라인 차트
  - [ ] 트리맵
  - [ ] 프로그레스 바
  - [ ] 파이 차트

### 설정 모듈
- [ ] 증권사 관리
  - [ ] 기본 증권사 데이터 설정
  - [ ] CRUD 기능 구현
- [ ] 종목 관리
  - [ ] 기본 종목 데이터 설정
  - [ ] 티커명-종목명 매핑
  - [ ] CRUD 기능 구현
- [ ] 데이터 관리
  - [ ] JSON 내보내기
  - [ ] JSON 가져오기
  - [ ] 데이터 초기화

## Phase 4: 성능 최적화 (2주)
### 로딩 최적화
- [ ] 코드 분할 (Code Splitting)
- [ ] 지연 로딩 구현
- [ ] 이미지 최적화
- [ ] 캐시 전략 구현

### 성능 지표 최적화
- [ ] FCP < 1.8s
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1

## Phase 5: 품질 관리 (2주)
### 테스트 구현
- [ ] 단위 테스트 작성
- [ ] 통합 테스트 작성
- [ ] E2E 테스트 구현
- [ ] 성능 테스트

### 접근성 및 UX
- [ ] WCAG 2.1 준수
- [ ] 키보드 네비게이션
- [ ] 스크린 리더 지원
- [ ] 반응형 디자인 검증

## Phase 6: 배포 준비 (1주)
### 보안 구현
- [ ] HTTPS 설정
- [ ] XSS 방지
- [ ] CSRF 보호
- [ ] 입력 데이터 검증

### 배포 환경 구성
- [ ] CI/CD 파이프라인 구축
- [ ] 환경 변수 설정
- [ ] 빌드 최적화
- [ ] 모니터링 시스템 축

## 일정 계획
- Phase 1: 1주차
- Phase 2: 2주차
- Phase 3: 3-6주차
- Phase 4: 7-8주차
- Phase 5: 9-10주차
- Phase 6: 11주차

총 개발 기간: 11주

## 주요 마일스톤
1. 1주차 말: 개발 환경 구축 완료
2. 2주차 말: 디자인 시스템 구축 완료
3. 6주차 말: 핵심 기능 구현 완료
4. 8주차 말: 성능 최적화 완료
5. 10주차 말: 품질 관리 완료
6. 11주차 말: 배포 준비 완료

## 품질 기준
- 코드 커버리지 80% 이상
- Lighthouse 점수 90점 이상
- 타입스크립트 strict 모드 준수
- 웹 표준 및 접근성 준수 