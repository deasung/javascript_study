
```javascript
const book = {
title: 'Reasons and Persons',
author: 'Derek Parfit',
};

const update = { ...book, year: 1984};
```

## 배열 펼침 연산자는 동일한 키에 대해서는 마지막에 선언된 값을 사용함
```javascript
const update = { ...book, title: 'Reasons & Persons'};
```


## Object.assign 이용해 정보를 추가하거나 갱신하는 방법
```javascript
const defaults = {
  author: '',
  title: '',
  year: 2017,
  rating: null,
};

const book = {
  author: 'Joe Morgan',
  title: 'Simplifying JavaScript',
};

const updated = Object.assign({}, defaults, book);
```

## 객체 펼침 연산자를 이용시 
```javascript
const defaults = {
  author: '',
  title: '',
  year: 2017,
  rating: null,
};

const book = {
  author: 'Joe Morgan',
  title: 'Simplifying JavaScript',
};

const bookWithDefaults = { ...defaults, ...book};

console.log(bookWithDefaults);
```

Object.assign()에서 깊은 병합 문제는 객체 펼침 연산자를 사용해도 여전히 발생함
중첩된 객체가 있는 경우 객체를 복사하지 않고 참조만 복사..

## 객체 펼침 연산자로 좀 더 보기 좋게 해결방법
```javascript
const employee = {
  ...defaultEmployee,
  name: {
    ...defaultEmployee.name
  }
}

```