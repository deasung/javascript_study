const book = {
  title: 'Reasons and Persons',
  author: 'Derek Parfit',
};

// const update = { ...book, year: 1984};

//배열 펼침 연산자는 동일한 키에 대해서는 마지막에 선언된 값을 사용함
const update = { ...book, title: 'Reasons & Persons'};


//Object.assign 이용해 정보를 추가하거나 갱신하는 방법
