# eslint-config-codestates

fronttigger의 공통 린트 규칙 모음입니다.

## 프로젝트 구조

```
.github
├── workflows
│   └── *.yaml
rules (개발자 커스텀 룰 규칙 모음)
├── typescript (타입스크립트 룰)
│   └── *.js
├── base.js (eslint 기본 룰)
├── import.js (모듈 import/export 관련 룰)
├── jsx-a11y.js (접근성 관련 룰)
├── prettier.js (prettier 관련 룰)
├── promise.js (promise 관련 룰)
├── react-hooks.js (react hooks 관련 룰)
├── react.js (react 관련 룰)
scripts (스크립트)
├── canary-publish.sh (카나리 배포 스크립트)
test (린트 테스트 모음)
└── * (각 환경별 테스트 디렉토리)
    ├── .eslintrc
    └── *.{js,ts,tsx}
frontend.js (프론트엔드 전용 린트 모듈)
index.js (린트 모듈)
prettierrc.js (프리티어 모듈)
stylelint.js (스타일린트 모듈)
tsconfig.json
```

## 설치

### npm

```bash
npm install --save-dev eslint-config-fronttigger
```

### yarn

```bash
yarn add -D eslint-config-fronttigger
```

## 사용 방법

### ESLint

1. 사용하는 프로젝트의 `package.json` scripts 속성에 아래 명령어를 추가합니다.

```json
{
  "lint": "eslint './src/**/*.{js,ts,tsx}'",
  "lint:fix": "npm run lint -- --fix"
}
```

2. 프로젝트 루트에 `.eslintrc` 파일을 만들고 추가한 린트 의존성을 작성합니다.

만약 추가, 확장할 설정이 있다면 주석 부분에 추가합니다.

```js
{
  "extends": [
    "eslint-config-fronttigger"
    // 확장할 규칙 작성
  ],
  "rules": {
    // 추가할 규칙 작성
  }
}
```

#### frontend

React 기반의 **프론트엔드 프로젝트**라면 아래와 같이 `.eslintrc` 파일을 작성합니다.

```json
{
  "extends": ["eslint-config-fronttigger/frontend"]
}
```

### Prettier

1. 사용하는 프로젝트의 `package.json` scripts 속성에 아래 명령어를 추가합니다.

```json
{
  "prettier": "prettier './src/*.{json,yaml,md,js,ts,tsx}' --check",
  "prettier:fix": "prettier './src/*.{json,yaml,md,js,ts,tsx}' --write"
}
```

2. 프로젝트 루트에 `.prettierrc` 파일을 만들고 추가한 의존성을 작성합니다.

```js
'eslint-config-fronttigger/prettierrc'
```

### Stylelint

1. 사용하는 프로젝트의 `package.json` scripts 속성에 아래 명령어를 추가합니다.

```json
{
  "lint:style": "stylelint './src/**/*.{js,ts,tsx}'",
  "lint:style:fix": "stylelint './src/**/*.{js,ts,tsx}' --fix"
}
```

2. 프로젝트 루트에 `.stylelintrc` 파일을 만들고 추가한 의존성을 작성합니다.

```json
{
  "extends": ["eslint-config-fronttigger/stylelint"]
}
```

## Trouble shooting

### vscode 환경에서 파일 저장시 AutoFix가 동작하지 않는 경우 `settings.json`에 아래의 코드를 추가합니다.

> ```json
> "editor.formatOnSave": true,
> "editor.codeActionsOnSave": {
>   "source.fixAll.stylelint": true,
>   "source.fixAll.eslint": true
> },
> "stylelint.validate": [
>   "css",
>   "scss",
>   "less",
>   "postcss",
>   "typescriptreact",
>   "typescript",
>   "javascript",
>   "javascriptreact"
> ],
> "editor.formatOnSave": true,
> "editor.defaultFormatter": "esbenp.prettier-vscode",
> "[javascript]": {
>   "editor.defaultFormatter": "esbenp.prettier-vscode"
> },
> "[typescript]": {
>   "editor.defaultFormatter": "esbenp.prettier-vscode"
> },
> "[javascriptreact]": {
>   "editor.defaultFormatter": "esbenp.prettier-vscode"
> },
> "[typescriptreact]": {
>   "editor.defaultFormatter": "esbenp.prettier-vscode"
> },
> "[json]": {
>   "editor.defaultFormatter": "esbenp.prettier-vscode"
> },
> ```
