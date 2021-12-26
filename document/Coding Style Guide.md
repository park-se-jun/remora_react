# [Client] Coding Style Guide 작성

assign: 익명
deadline: 2021년 11월 2일 → 2021년 11월 9일
edited: 2021년 11월 7일 오후 9:09
part: Client
priority: high
status: Archieve

### 개요

- 프론트엔드 개발은 react를 통해 이루어 지며 디렉토리 구조는 "**Structuring your React Application — Atomic Design Principles"**을 참고했으며, 코딩 스타일은 [Airbnb React/JSX Style Guide](https://airbnb.io/javascript/react/#spacing) 문서를 참고 했다.

### 프로젝트 파일 구조 (Layout)

- 프로젝트의 워킹 디렉토리 구조는 리액트 프로젝트 생성 도구인 [create-react-app](https://github.com/facebook/create-react-app) 의 기본 골조를  따라간다.

```jsx
//example
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

- src 디렉토리의 구조는 아토믹 디자인을 기본 골자로 "**Structuring your React Application — Atomic Design Principles"** 포스트를 참조하여 아래와 같이 구성한다.

```jsx
//필요에 따라 변경 될 수 있음

src
├── assets
├── components
│   ├── pages
│   ├── templates
│   └── UI
│       ├── atoms
│       ├── molecules
│ 			└── organisms
├── styles
└── config
```

### Naming Convention

- 확장자 : 리액트 컴포넌트들의 확장자는 .jsx 로 한다.
- 파일이름 : 파이르이 이름에는 PascalCase 를 사요한다
- 레퍼런스 이름 :  PascalCase를 사용한다. 그로부터 생성된 instance들은 camelCase를 사용한다.

```jsx
// bad
import reservationCard from './ReservationCard';

// good
import ReservationCard from './ReservationCard';

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;
```

- 컴포넌트 이름 : 파일의 이름을 컴포넌트의 이름으로 사용한다. 단 루트 컴포넌트에 한해서 index.jsx 로 하고  디렉토리의 이름을  컴포트의 이름으로 한다.

```jsx
// bad
import Footer from './Footer/Footer';

// bad
import Footer from './Footer/index';

// good
import Footer from './Footer';
```

- 속성 이름 : 항상 카멜 케이스를 사용한다. DOM 구성요소 속성을 이름으로 사용하면 안된다.

```jsx
// bad
<Foo
  UserName="hello"
  phone_number={12345678}
/>

// good
<Foo
  userName="hello"
  phoneNumber={12345678}
/>

// bad
<MyComponent style="fancy" />

// bad
<MyComponent className="fancy" />

// good
<MyComponent variant="fancy" />
```

### 주석

- HTML 주석은 <!— —>을 사용한다.
    - 한 줄에는 짧은 comment를 사용해야한다.
    - 한 줄 이상은 다음과 같이 주석을 달아야 한다.

```html
<!--
  This is a long comment example. This is a long comment example.
  This is a long comment example. This is a long comment example.
-->
```

- 긴 주석은 공백 두개로 들여쓰면 보기가 쉽다.
- JSX 주석은 다음의 규칙을 따른다.
    - 주석은 반드시 완성된 문장이어야 한다. (영어의 경우) 첫 단어는 소문자로 시작하는 식별자가 아니라면 대문자로 써야한다.
    - Block 주석은 완성된 문장으로 구성된 하나 이상의 문단으로 이루어져 있는 것이 일반적이다. 각 문장은 마침표로 끝난다.
    - 주석은 명확해야 하고 이해하기 쉬워야 한다.
    - 여러 줄의 주석은 /* */로 처리한다.
    - Inline 주석은 사용을 자제하는 것이 좋다. Inline 주석의 경우 코드로부터 최소 2개의 공백을 가져야 한다. //으로 시작하며, 하나의 공백을 갖고 그 다음 주석을 적는다. Inline 주석은 해당 구문이 명백하다면 불필요하다. 그러니 사용을 최소화 해야 한다.

### 코딩스타일

- 파일당 1개의 리액트 컴포넌트만을 포함한다.
- 만약 소스안에 state 나 refs 가 있으면 React.createClass 보다 class extends React.Coponent를 우선한다.

```jsx
// bad
const Listing = React.createClass({
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
});

// good
class Listing extends React.Component {
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
}
```

- 만약 소스 안에 state나 refs가 없다면 일반 클래스 방식 보다는 일반 함수 방식을 우선 한다.

```jsx
// bad
class Listing extends React.Component {
  render() {
    return <div>{this.props.hello}</div>;
  }
}

// bad (익명함수의 형태이므로 함수의 이름을 추론해야하기 때문에 비추천)
const Listing = ({ hello }) => (
  <div>{hello}</div>
);

// good
function Listing({ hello }) {
  return <div>{hello}</div>;
}
```

### Alignment

- JSX 구문에 대해서 아래의 스타일을 따른다.

```jsx
//bad
<Foo superLongParam="bar"
     anotherSuperLongParam="baz" />

// good
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>

// if props fit in one line then keep it on the same line
<Foo bar="bar" />

// children get indented normally
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
>
  <Quux />
</Foo>
```

### Props

- prop 의 값이 true로 명확할 경우 생략 한다.

```jsx
// bad
<Foo
  hidden={true}
/>

// good
<Foo
  hidden
/>

// good
<Foo hidden />
```

- props으로 전달되는 문자열은 전부 큰 따옴표를 사용한다.

```jsx
// bad
<Foo bar='bar' />

// good
<Foo bar="bar" />
```

### 괄호

- 괄호의 위치는 K&R 스타일로 한다.

```jsx
//bad
render() 
{
  const body = <div>hello</div>;
  return <MyComponent>{body}</MyComponent>;
}
//good
render() {
  const body = <div>hello</div>;
  return <MyComponent>{body}</MyComponent>;
}
```

- jsx 구문의 경우 태그가 두줄 이상으로 늘어나면 괄호로 감싸야 한다.

```jsx
// bad
render() {
  return <MyComponent className="long body" foo="bar">
           <MyChild />
         </MyComponent>;
}

// good
render() {
  return (
    <MyComponent className="long body" foo="bar">
      <MyChild />
    </MyComponent>
  );
}

// good, 한 줄이라면 괜찮다.
render() {
  const body = <div>hello</div>;
  return <MyComponent>{body}</MyComponent>;
}
```

### 태그

- 자식 컴포넌트가 없으면 항상 닫힘 태그를 사용한다.

```jsx
// bad
<Foo className="stuff"></Foo>

// good
<Foo className="stuff" />
```

- 컴포넌트가 다수의 속성을 가졌다면 닫힘 태그는 새로운 줄에 작성한다.

```jsx
// bad
<Foo
  bar="bar"
  baz="baz" />

// good
<Foo
  bar="bar"
  baz="baz"
/>
```

### Indentaion

- indentation은 <tab> key로 이루어진다 (tap key는 space 4칸)

### blank Space

- 닫힘 태그는 항상 한칸짜리 빈 공간을 가진다.

```jsx
// bad
<Foo/>

// very bad
<Foo                 />

// bad
<Foo
 />

// good
<Foo />
```

- JSX 중괄호에 빈 공간을 덧대지 않는다.

```jsx
// bad
<Foo bar={ baz } />

// good
<Foo bar={baz} />
```

### Reference

- [react directory structure](https://ko.reactjs.org/docs/faq-structure.html)
- [https://ui.toast.com/weekly-pick/ko_20200213](https://ui.toast.com/weekly-pick/ko_20200213)
- [에어비앤비 리액트/JSX 코드 스타일 가이드](https://airbnb.io/javascript/react/) [(한국어 번역)](https://github.com/apple77y/javascript/tree/master/react)
- [https://www.w3schools.com/html/html5_syntax.asp](https://www.w3schools.com/html/html5_syntax.asp)
- [Structuring your React Application — Atomic Design Principles](https://andela.com/insights/structuring-your-react-application-atomic-design-principles/) [(한국어번역)](https://ui.toast.com/weekly-pick/ko_20200213)

---