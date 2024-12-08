# 한미 주식 관리 시스템 (USA-KOR Stock Management System)

## 프로젝트 개요
이 프로젝트는 한국과 미국 주식 시장의 포트폴리오를 효율적으로 관리하기 위한 웹 애플리케이션입니다. 
React 18과 TypeScript를 기반으로 구축.

## 기술 스택
- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Remix
- **Style**: CSS-in-JS
- **State Management**: Zustand + React Query 
- **Code Quality**:
  - ESLint
  - Prettier
  - TypeScript strict mode

## 개발 환경 설정
### 필수 요구사항
- Node.js v20.11.1 (LTS)
- npm v10.2.4 이상

### 설치 및 실행
```bash
# 저장소 클론
git clone https://github.com/gppc5096/kor-usa-stock.git

# 프로젝트 폴더로 이동
cd usa-kor-stock

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 사용 가능한 스크립트
- `npm run dev`: 개발 서버 실행
- `npm run build`: 프로덕션 빌드
- `npm run preview`: 빌드된 버전 미리보기
- `npm run lint`: ESLint 검사
- `npm run lint:fix`: ESLint 문제 자동 수정
- `npm run format`: Prettier로 코드 포맷팅

## 프로젝트 구조
```
usa-kor-stock/
├── src/
│   ├── components/    # 재사용 가능한 컴포넌트
│   ├── pages/        # 페이지 컴포넌트
│   ├── hooks/        # 커스텀 훅
│   ├── utils/        # 유틸리티 함수
│   └── types/        # TypeScript 타입 정의
├── public/           # 정적 파일
└── config/           # 설정 파일
```

## Git 브랜치 전략
- `main`: 프로덕션 브랜치
- `develop`: 개발 브랜치
- `feature/*`: 새로운 기능 개발
- `bugfix/*`: 버그 수정
- `release/*`: 릴리스 준비

## 버전 관리
```bash
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/gppc5096/kor-usa-stock.git
git push -u origin main
```
# 현재 Git 저장소의 상태 확인 (변경된 파일, 스테이징 상태 등)
git status
# 원격 저장소 정보 확인
git remote -v
# 현재 브랜치 확인
git branch
# 커밋 히스토리 확인
git log
# 변경된 파일의 차이점 확인
git diff

1. 로컬 저장소와 원격 저장소 설정을 모두 삭제하고 초기화하는 방법:
# 현재 디렉토리의 Git 설정 삭제
rm -rf .git
# Git 초기화
git init
# 원격 저장소 연결
git remote add origin https://github.com/gppc5096/usa-kor-stock.git
# main 브랜치 생성
git branch -M main

2. 로컬 저장소를 삭제하고 원격 저장소에서 데이터를 가져오는 방법:
# 현재 디렉토리에서 상위 디렉토리로 이동
cd ..

# 기존 프로젝트 폴더 삭제
rm -rf 01-usa-kor-stock
# 원격 저장소에서 새로 클론
git clone https://github.com/gppc5096/kor-usa-stock.git 01-usa-kor-stock
# 새로 클론한 프로젝트 폴더로 이동
cd 01-usa-kor-stock
# 의존성 패키지 설치
npm install

## ESLint 설정 확장
프로덕션 애플리케이션을 개발하는 경우 타입 인식 린트 규칙을 활성화하는 것이 좋습니다:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

## 라이센스
이 프로젝트는 MIT 라이센스 하에 있습니다.

## 기여 방법
1. 이 저장소를 포크합니다
2. 새로운 브랜치를 생성합니다
3. 변경사항을 커밋합니다
4. 브랜치에 푸시합니다
5. Pull Request를 생성합니다

## 문의사항
GitHub Issues를 통해 문의해주세요.
