
//ES6에서 추가됨 다른 객체의 키-값으로 객체의 필드를 생성하고 갱신할수 있도록 함

//문제 기본값 객체를 갱신하면서 원본 객체를 조작하게됨

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


const anotherBook = {
  title: 'Another book',
  year: 2016,
}

//문제 -> 기본값 객체를 갱신하면서 원본 객체를 조작함
// Object.assign(defaults, book);

// const temp = Object.assign(defaults, anotherBook);
// console.log(temp)

//개선이지만 문제점 하나가 있음 -> 속성을 복사하면 값만 복사됨 , 값이 객체일때 문제
const updated = Object.assign({}, defaults, book);

console.log(updated)

const defaultEmployee = {
  name: {
    first: '',
    last: '',
  },
  years: 0,
};

//중첩된 객체가 있는 객체를 복사하는 것을 깊은 복사(deep copy), 깊은 병합(deep merge)
// const employee = Object.assign({}, defaultEmployee);

// console.log(employee)

//문제점 참조에 의한 복사라 원본객체 또한 값이 변경됨.
// employee.name.first = 'Joe';

// console.log(defaultEmployee)

const employee2 = Object.assign(
    {},
    defaultEmployee,
    {
      name: Object.assign({}, defaultEmployee.name),
    }
);

// console.log(employee2)

employee2.name.first = 'Joe';

console.log(employee2)


//다른 방법 로대시(Lodash) 라이브러리의 경우 cloneDeep()이라는 메서드 이용

