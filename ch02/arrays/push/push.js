function addGift(cart,reward) {

  if (cart.length > 2) {
    return [...cart, reward];  //원본 배열을 재사용해 새로운 배열로 할당
  }

  return cart;

}

/**
 * 펼침 연산자
 * ...
 *
 * 장점
 */


//배열의 앞에 추가하기
const titles = ['Moby Dick', 'White Teeth'];

console.log(titles)

//shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.
titles.shift('The Conscious Mind');

console.log(titles)

const moreTitles = ['Moby Dick','White Teeth'];
const evenMoreTitles = ['The Conscious Mind', ...moreTitles]

console.log(evenMoreTitles)

//복사하기
