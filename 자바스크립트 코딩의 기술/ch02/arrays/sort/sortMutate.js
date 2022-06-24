const staff = [
  {
    name: 'Joe',
    years: 10,
  },
  {
    name: 'Theo',
    years: 5,
  },
  {
    name: 'Dyan',
    years: 10,
  }
]

function sortByYears(a, b) {
  if (a.years === b.years) {
    return 0;
  }
  return a.years - b.years;
}

const sortByName = (a,b) => {
  if (a.name === b.name) {
    return 0;
  }
  return a.name > b.name ? 1 : -1;
}

//배열을 정렬할 때 해당 배열은 변경됨..
staff.sort(sortByYears)

//원본데이터를 조작하지 말고 사본을 만들고 사본을 조작
const temp = [...staff].sort(sortByYears)
console.log(temp)

//펼침 연산자 훌륭한 이유 -> 엄청나게 유용하면서 동시에 엄청나게 단순
