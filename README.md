# vue_fundamental

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Tailwind css install

vue 사이드 프로젝트의 일관된 디자인을 쉽고 빠르게 하기 위해, Tailwind를 설치하고 사용하게 되었다.

Tailwind 설치는 아주 간단하다. 여러 방법이 있지만 나는 Tailwind CLI 도구를 사용하였다.

1. Tailwind CSS 설치

npm 명령어로 설치했고, tailwind.config.js 파일을 만든다.

npm install -D tailwindcss
npx tailwindcss init

2. 템플릿 경로 구성

tailwind.config.js 에 모든 템플릿 파일에 대한 경로를 추가한다.

/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: ["./index.html", "./src/**/\*.{vue,js,ts,jsx,tsx}"],
theme: {
extend: {},
},
plugins: [],
}

3. css 파일을 하나 만들고 지시문 추가한다.

/_ ./src/index.css _/
@tailwind base;
@tailwind components;
@tailwind utilities;

4. 지시문을 추가한 파일을 빌드한다.

npx tailwindcss -i ./src/index.css -o ./src/output.css --watch

5. 사용할 페이지에 컴파일된 파일을 추가한다.

main.js

import { createApp } from 'vue'
import App from './App.vue'
import "./output.css"

createApp(App).mount('#app')

6. 클래스 추가하여 tailland 적용되었는지 확인한다.

예시코드

'<pre><h1 class="text-3xl font-bold underline">{{ msg }}</h1></pre>

7.서버 띄워 확인한다.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
