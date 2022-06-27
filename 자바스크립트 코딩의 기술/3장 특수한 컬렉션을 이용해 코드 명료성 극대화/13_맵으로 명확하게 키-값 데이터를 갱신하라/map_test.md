


## 맵에서는 항상 명시적으로 새로운 인스턴스 생성 
```javascript
let filters = new Map();
```
let을 사용한 이유는 데이터를 추가하면서 객체를 조작할것이기 때문


## 인스턴스 생성 한 후에는 set() 메서드 이용해서 데이터 추가 
```javascript
filters.set('견종','래브라도레트리버');
```

## 데이터 가져오려면 get
````javascript
filters.get('견종')
````

## 메서드 체인닝도 가능
```javascript
let filters = new Map()
  .set('견종', '래브라도레트리버')
  .set('크기', '갈색')
  .set('색상', '갈색');

filters.get('크기'); //대형견 
```

## 키-값 쌍이 담긴 객체를 배열로 변환
````javascript
let filters = new Map(
    [
        ['견종','래브라도레트리버'],
        ['크기','대형견'],
        ['색상','갈색'],
    ]
)
filters.get('색상'); //갈색
````

## 맵에서 값을 제거할때 delete() 메서드
```javascript
filters.delete('색상');
filters.get('색상'); //undefined
```

## 모든 키-값 쌍을 제거할때 clear() 
```javascript
filters.clear()
filters.get('색상') //undefined
```

## 객체 대신 맵을 사용하도록 함수 변경
```javascript
const petFilters = new Map();

function addFilters(filters, key, value) {
  filters.set(key, value);
}

function deleteFilters(filters, key) {
  filters.delete(key);
}

function clearFilters(filters) {
  filters.clear();
}
```

정보를 자주 변경하는 경우 객체보단 맵을 사용하는 것이 휠씬 편리 

객체에는 특정한 자료형의 키만 사용할수 있음 
가장 중요한 점은 정수를 키로 사용할수 없다는 점 
```javascript
//요건 못쓰는거임
const errors = {
  100: '이름이 잘못되었습니다',
  110: '이름에는 문자만 입력할 수 있습니다',
  200: '색상이 잘못되었습니다.'
}

function isDataValid(data) {
  if (data.length < 10) {
    return errors.100 //정수를 키로하는 점 표기법 못씀 
  }
  return true;
}
```



맵에는 위와 같은 문제가 없음

```javascript
let errors = new Map([
    [100, '이름이 잘못되었습니다'],
    [110, '이름에는 문자만 입력할 수 있습니다.'],
    [200, ' 색상이 잘못되었습니다.']
]);
errors.get(100); // 이름이 잘못되었습니다.
```

## 맵도 객체와 마찬가지로 키만 모아서 확인 가능
```javascript
errors.keys();
//MapIterator { 100,110,200 }
```

