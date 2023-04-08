# Nextjs-study

### 인프런 Next.js 시작하기(feat.지도 서비스)

* lecture-1 create-next-app으로 Next.js 시작하기

1. `npx create-next-app@latest --typescript` 키워드로 next app 생성(ESLint 설치 O)
2. `yarn add --dev --exact prettier` Prettier 설치
3. `echo {} > .prettierrc.json` Prettier 설정 Json 생성 및 내용 추가
4. `yarn add --dev eslint-config-prettier` Eslint-Prettier 간의 충돌 방지를 위한 플러그인 설치
5. .eslintrc.josn 수정 : `"extends": ["next/core-web-vitals", "prettier"]`
6. `yarn dev` 로 local host 실행