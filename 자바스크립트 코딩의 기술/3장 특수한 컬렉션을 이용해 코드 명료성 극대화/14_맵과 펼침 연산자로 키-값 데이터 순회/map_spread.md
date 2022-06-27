


## 14장 맵과 펼침 연산자를 키-값 데이터를 순회하라

객체를 순회하는 것은 복잡한 작업

```javascript

const filters = {
  색상: '검정색',
  견종: '래브라도레트리버',
};

function getAppliedFilters(filters) {
  const keys = Object.keys(filters);
  const applied = [];
  
  for (const key of keys) {
    applied.push(`${key}:${filters[key]}`);
  }
  
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}

getAppliedFilters(filters);

```

객체마다 순서가 보장이 안됨, 객체를 정렬할 수 없다는 의미 
필터링 조건을 정렬하려면 먼저 키 정렬
```javascript
function getSortedAppliedFilters(filters) {
  const keys = Object.keys(filters);
  keys.sort();
  const applied = [];
  for (const key of keys) {
    applied.push(`${key}:${filters[key]}`);
  }
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}
```

## 맵은 정렬과 순회에 필요한 기능이 내장되어있음(맵이터레이터)

```javascript
const filters = new Map()
  .set('색상', '검정색')
  .set('견종', '래브라도레트리버');

function checkFilters(filters) {
  for (const entry of filters) {
    console.log(entry);
  }
}
// ['색상','검정색']
// ['견종','래브라도레트리버']
```
이터레이터는 키-값 쌍을 넘겨줌 


## entries() 메서드 맵에 있는 키-값을 쌍으로 묶은 맵이터레이터 반환 
```javascript
filters.entries();
// {['색상','검정색'],['견종','래브라도레트리버']}
```

ES2017부터 공식적으로 명세에 Object의 내장 메서드 Object.entries()로 추가됨 


```javascript
function getAppliedFilters(filters) {
  const applied = [];
  for (const [key, value] of filters) {
    applied.push(`${key}:${value}`);
  }
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}
//선택한 조건은 색상:검정색, 견종:래브라도레트리버 입니다.
```

맵이 순서를 저장, 배열의 경우처럼 정렬 메서드가 내장되어 있지 않음 
```javascript
filters.sort() // x(사용못함) 맵에서 
```

## 정렬할때 펼침연산자 사용
````javascript
...filters;
// ['색상','검정색'],['견종','래브라도레트리버']
````

## 비교 함수 작성 예시
```javascript
function sortByKey(a, b) {
  return a[0] > b[0] > 1 : -1;
}

function getSortedAppliedFilters(filters) {
  const applied = [];
  for (const [key, value] of [...filters].sort(sortByKey)) {
    applied.push(`${key}:${value}`);
  }
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}
//선택한 조건은 견종:래브라도레트리버, 색상:검정색 입니다.
```


## map() 메서드를 이용해 다시 작성 
```javascript


function getSortedAppliedFilters(filters) {
  const applied = [...filters].map(([key, value]) => {
    return `${key}:${value}`;
  });
  return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}
```

sort()함수와 join() 함수로 결합하여 단순하게 변경 
```javascript
function getSortedAppliedFilters(filters) {
  const applied = [...filters]
  .sort(sortByKey)
  .map(([key, value]) => {
    return `${key}:${value}`;
  })
  .join(', ');
  return `선택한 조건은 ${applied} 입니다.`;
}
```