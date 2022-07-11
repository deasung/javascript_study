

맵의 사본 만드는 샘플
키 - 값 쌍이 담긴 배열을 전달하면 새로운 맵을 생성할 수 있음
```javascript
function applyDefaults(map, defaults) {
  const copy = new Map([...map]);
  for (const [key, value] of defaults) {
    if (!copy.has(key)) {
      copy.set(key, value);
    }
  }
  
  return copy;
}

```

맵은 객체와 마찬가지로 하나의 키를 한 번만 사용함 
새로운 키로 맵을 생성하면 어떤 값이든 해당 키에 마지막으로 선언한 값을 사용
즉, 값을 설정하는 대신 갱신

```javascript
const filters = new Map()
  .set('color', 'black')
  .set('color', 'brown')
filters.get('color')
//brown
```

객체 펼침 연산자 활용하면 맵 두 개를 병합하는 코드를 한줄로 작성
```javascript
let filters = new Map()
  .set('색상', '검정색')
let filter2 = new Map()
  .set('색상', '갈색');

let update = new Map([...filters, ...filter2]);
update.get('색상');
//갈색
```

함수 개선 
collections/mapSideEffects/map.js
```javascript
function applyDefaults(map, defaults) {
  return new Map([...defaults, ...map]);
}
```
