# Learning TypeScript

## Table of Contents
1. [ESLint & Prettier Setting ⚙️](#eslint-and-prettier-setting)
1. [Reference 📄](#reference)

---

## ESLint and Prettier Setting

### ESLint

```bash
yarn add --dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### Prettier

```bash
yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier
```

```js
'prettier/prettier': [
  'error',
  {
    printWidth: 100,
    singleQuote: true,
    semi: true,
    useTabs: true,
    tabWidth: 2,
    trailingComma: 'all',
    bracketSpacing: true,
    arrowParens: 'avoid',
  },
],
```

## Tip

```bash
npx tsc -w src/chapter-11/index.ts
```



## Reference
- [2023년 자바카페 공개스터디](https://festa.io/events/xdmcF8o9yY4CEDbAKPuxsY)
- [Solution - Cannot redeclare block-scoped variable](https://www.totaltypescript.com/cannot-redeclare-block-scoped-variable)
  - [1-blue - Learning-TypeScript-2장](https://1-blue.github.io/posts/Learning-TypeScript-2%EC%9E%A5/)
- [gitmoji cli](https://github.com/carloscuesta/gitmoji-cli)

