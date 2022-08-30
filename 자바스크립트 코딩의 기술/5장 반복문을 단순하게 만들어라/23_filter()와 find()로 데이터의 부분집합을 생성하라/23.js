

const team = [
    'Michelle B',
    'Dave L',
    'Dave C',
    'Courtney B',
    'Davina M',
];

const daves = [];
for (let i = 0; i < team.length; i++) {
  if (team[i].match(/Dav/)) {
    daves.push(team[i]);
  }
}

console.log(daves);

//filter() 메서드에 전달하는 함수는 반드시 참 값을 반환해야함
//filter() 메서드는 항상 배열을 반환하며 조건에 일치하는 값이 없는 경우에도 배열을 반환함
const scores = [30, 82, 70, 45];

function getNumberOfPassingScores(scores) {
  const passing = scores.filter(score => score > 59);

  console.log(passing);

  return passing.length;
}

console.log(getNumberOfPassingScores(scores))

//find() 메서드는 참 또는 거짓 값을 반환하는 함수를 인수로 받고, 배열의 항목에 전달된
//함수로 평가해 참 값을 반환하는 첫 번째 항목만 반환함


const instructors = [
  {
    name: '짐',
    libraries: ['미디어교육정보 도서관'],
  },
  {
    name: '새라',
    libraries: ['기념 도서관','문헌정보학 도서관'],
  },
  {
    name: '엘리엇',
    libraries: ['중앙 도서관']
  },
];

const librarian = instructors.find(instructors => {
  return instructors.libraries.includes('기념 도서관');
});

console.log(librarian);
