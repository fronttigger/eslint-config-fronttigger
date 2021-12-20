# eslint-config-fronttigger

## installation

```bash
$ npm i --save-dev eslint-config-fronttigger
```

## usage

### javascript or typescript

```js
// .eslintrc or .eslintrc.json

{
    "root": true,
    "extends": ["eslint-config-fronttigger"],
}
```

react

```js
// .eslintrc or .eslintrc.json

{
    "root": true,
    "extends": ["eslint-config-fronttigger/react"],
}
```

`package.json`에 다음 스크립트를 추가해주세요.

```json
{
  "lint": "eslint './**/*.{js,ts,tsx}'",
  "lint:fix": "npm run lint -- --fix"
}
```

### prettier

```text
"eslint-config-fronttigger/prettierrc"
```

`package.json`에 다음 스크립트를 추가해주세요.

```json
{
  "prettier": "prettier '**/*.{json,yaml,md}' --check",
  "prettier:fix": "prettier '**/*.{json,yaml,md}' --write"
}
```

### stylelint

```js
// .stylelintrc or .stylelintrc.json

{
    "root": true,
    "extends": ["eslint-config-fronttigger/stylelint"],
}
```

`package.json`에 다음 스크립트를 추가해주세요.

```json
{
  "lint": "eslint './**/*.{js,ts,tsx}'",
  "lint:fix": "npm run lint -- --fix"
}
```
