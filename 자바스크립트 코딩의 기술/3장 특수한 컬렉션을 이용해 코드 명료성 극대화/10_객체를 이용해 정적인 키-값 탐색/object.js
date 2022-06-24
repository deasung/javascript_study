//객체 리터널 중괄호에 키-값을 작성하는 것
const colors = {
  red: '#d10202',
  green: '#19d836',
  blue: '#0e33d8'
}

//객체는 단순하기 때문에 정적인 정보를 다루기 훌륭
//객체가 정적인 정보에 적합 , 계속해서 갱신,반복,대체,정렬해야할 정보에는 적절하지 않음 => 이때는 맵을 사용하는 것이 낮다함

export const config = {
  endpoint: 'http://pragprog.com',
  key: 'secretkey',
};


function getBill(item) {
  return {
    name: item.name,
    due: twoWeeksFromNow(),
    total: calculateTotal(item.price),
  };
}

const bill = getBill({
  name: '객실 청소',
  price: 30
});

function displayBill(bill) {
  return `${bill.name} 비용은 ${bill.total} 달러이며 납부일은 ${bill.due} 입니다.`
}