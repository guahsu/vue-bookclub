# Vue - BookClub

### VScode套件推薦安裝下列幾項：
1. ESLint // 如果你有用代碼規範的話
2. Vetur
3. Vue 2 Snippets
4. Prettier - code formatter  

設定新增下列選項，
可以設為工作區使用避免與自己當前專案衝突：
```
"editor.tabSize": 2,
"editor.renderControlCharacters": true,
"editor.renderWhitespace": "all",
"prettier.semi": false, 
"prettier.singleQuote": true,
"prettier.trailingComma": "none",
"prettier.printWidth": 120,
```

### 環境建置
#### 1. 安裝Vue-cli

使用 npm 
```
npm install -g vue-cli
```

使用 yarn
```
yarn global add vue-cli
```

#### 2. 找個地方建立專案
```
vue init webpack vue-book-club
```

**起專案的選項**
```
? Project name vue-book-club // 直接enter
? Project description A Vue.js project // 直接enter
? Author GuaHsu <guaswork@gmail.com> // 直接enter
? Vue build standalone
? Install vue-router? Yes  // [必裝]練習會用到
? Use ESLint to lint your code? Yes  // [可選]代碼規範，建議安裝
? Pick an ESLint preset Standard 
? Set up unit tests Yes // [可選]建議先裝JEST日後有空可讀這個
? Pick a test runner jest
? Setup e2e tests with Nightwatch? Yes // [可選]建議先裝起來，日後有空可讀這個
? Should we run `npm install` for you after the project has been created? (recommended) npm // [可選]我是用NPM啦 (yarn 比較快喔!)
```

#### 3. 進入專案目錄
`cd vue-book-club`

#### 4. 安裝套件 (npm/yarn 擇一使用)

1. **Sass(Scss)**  
`npm install sass sass-loader node-sass --save`  
`yarn add sass sass-loader node-sass`
2. **Pug** - 建議裝著，可選用  
`npm install pug pug-loader pug-filters --save`  
`yarn add pug pug-loader pug-filters`
3. 安裝package.json內其它套件  
`npm install`  
`yarn install`

#### 5. 修改一下eslint規則 - for Prettier code / standard
```javascript
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 新增的是下面這兩個
    'space-before-function-paren': 0,
    'new-cap': [
      'error', {
        'properties': false
      }
    ]
  }
```
> 因為Prettier code目前不支援standard的function空格設定所以小改一下  

#### 6. 跑看看`npm run dev`，看有沒有出現hello world資訊

或是 `yarn run start`

### 目標
#### 第一週：
1. vue-cli結構說明與vue-route(1)的最簡單用法
2. 透過一個極簡todolist來說明vue的基礎語法  
  (1)data, computed, watch, methods  
  (2)v-model, v-if, v-show, v-for, v-bind, v-on
3. 簡易說明sass與pug

### 接著的目標：
1. 生命週期(1)
2. component
3. prop,  slot
4. event
5. vuex

