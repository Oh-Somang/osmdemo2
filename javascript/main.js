// // 1. 간단한 입출력 방법: alert, confirm
// alert('안녕하세요'); //알림창이 뜸
// let answer = confirm('베경 이미지를 바꾸시겠습니까?') //확인(True) 취소(False) 버튼 선택 가능, 응답 받는 것
// console.log('사용자 응답: ', answer) //여기에 출력됨, F12 눌러서 console창 띄울 수 있음

// let name1 = prompt('이름을 입력하세요')
// console.log('당신의 이름은 ', name1, '입니다.')
// document.write('당신의 이름은 <b style="color: red; ">', name1, '</b>입니다.') //document = 현재 연결되어 있는 html 문서

// var n = 10
// var n1 = 10
// var n2 = 20
// //var n1 = 10, var n2 = 20 //한 줄에 하나만 가능, 또는 사이에 , 넣기
// var n3 = 37823

//  변수 이름
// var n111111111111 = 10000000
// var 한글 = 10000
// var $n1 = 1777

// 첫 글자는 영문자로, (한글도 가능 ?)
// 첫 글자는 숫자 안 됨
// 대문자와 소문자는 구분해서 인식됨

// // - 기호는 사용 불가, _ 기호는 사용 가능
// // &, %, *, ! 기호들도 사용 불가

// //변수 이름 대문자로 쓰는 건 상수처럼 쓰겠다는 것

// var newName = 2777 //newname 보다는 newName 으로 알아보기 쉽게 하기
// for(i=0,i<=5,i++) // i 보다는 firstName과 같은 의미 있는 이름을 붙이는 것이 좋음

// // 한 줄 주석
// /**
//  *  여러 줄 주석
//  */

// // 2. 변수 선언: var, let, const

// var 한글 = 1000
// n1 = 'dlfkjwlkejo'
// var $_new_Name

// // var 재선언, 재할당 가능

// // let: 재선언 불가, 재할당 가능
// let firstname, lastname
// firstname = 100
// firstname = 'dlfkjwlkejo'
// let now, Now, noW

// // const: 재설정 불가, 재할당 불가
// const newName = 'dlfkjwlkejo'

// //3. 자료형
// //변수 선언 시 자료형을 명시하지 않음
// let number = 'dlfkjwlkejo'
// number = 123567
// number = false
// let seasons = ['봄', '여름', '겨울', 4]
// console.log(seasons[3])
// let date = new Date()
// document.write('현재 시간은 ', date.toLocaleString(), '<br>')
// let date1
// document.write(date1)
// let a = 3, b = 4444
// let c = a + b
// console.log(a + '+' + b  + '=' + c) // +는 문자의 연결 연산자
// let bool = 100 >= 10
// bool = true
// console.log(bool)

// let x = 3
// let y = '3'
// let  z = x == y
// console.log(z)

// let x = 3
// let y = '4'
// let  z = x !== y
// console.log(z)

// let x = 3
// let y = '4'
// let  z = x < y
// console.log(z)

// let x = 3
// let y = '4'
// let  z = x < y || X >= y
// console.log(z)

// let x = 3
// let y = '4'
// let  z = x < y && X >= y
// console.log(z)

// let userNumber = prompt('숫자를 입력하세요 ')
// if (userNumber) {
//   if (userNumber % 3 === 0) alert('3의 배수입니다')
//   else alert('3의 배수가 아닙니다')
// }

// let i, j
// for(i = 1; i <= 9; i++) {
//   document.write('<h3' + i + '단</h3>')
//   for(j = 1; j <= 9; j++) {
//     document.write(i + "A" + j + '=' + i * j + '<br>')
//   }
// }

// 5. 함수
// function addNumber(a, b) {
//   return a + b
// }
// function mulNumber(a, b) {
//   return a * b
// }
// let a, b, c
// a = 3
// b = 4
// console.log(a + '+' + b + '=' + addNumber(a, b))
// console.log(a + '*' + b + '=' + mulNumber(a, b))
// a = 5.63
// b = 4.72
// console.log(a + '+' + b + '=' + addNumber(a, b))
// console.log(a + '*' + b + '=' + mulNumber(a, b))

// var는 가급적 사용하지 말 것

// function calcSum(n) {
//   let sum = 0
//   for(let i = 1; i <= n; i++) {
//     sum += i
//   }
//   return sum
// }
// console.log("1-100까지의 합 = ", calcSum(100))
// console.log("1-200까지의 합 = ", calcSum(200))

// const 함수는 재할당 불가

// let calcSum = function (n) {
//   let sum = 0
//   for (let i = 1; i <= n; i++) {
//     sum += i
//   }
//   return sum
// }

// console.log("1-100까지의 합 = ", calcSum(100))
// console.log("1-200까지의 합 = ", calcSum(200))

// ;(function(a, b) {
//   sum = a + b
// })(100,200)

// document.write('결과:', sum)

// const hi = function () {
//   return alert('안녕하세요')
// }
// hi()

// const hi1 = () => {
//   return alert('안녕하세요 화살표함수=>입니다')
// }
// hi1()

// const hi = function (user) {
//   return alert(user + '님 안녕하세요')
// }
// hi('hello')

// const hi1 = (user1, user2) => {
//   alert(user1 + '님 안녕하세요')
//   alert(user2 + '님도 안녕하세요')
// }
// hi1('hello', 'world')

// const hi1 = (user1, user2) => {
//   console.log(user1 + '님 안녕하세요')
//   console.log(user2 + '님도 안녕하세요')
// }
// hi1('hello', 'world')

// const hi2 = () => alert('안녕하세요. 방가방가')
// hi2

// 6. DOM 이벤트 처리
// let changeDom = document.querySelector('#change')
// changeDom.onclick = changeColor

// function changeColor() {
//   document.querySelector('p').style.color = 'red'
//   document.querySelector('p').style.backgroundcolor = 'cyan'
//   document.querySelector('#change').style.color = 'blue'
// }

// document.querySelector('#change').onclick = function () {
// }

document.querySelector('#change').onclick = () => {
  document.querySelector('p').style.color = 'red'
  document.querySelector('p').style.backgroundcolor = 'cyan'
  document.querySelector('#change').style.color = 'blue'
  document.querySelector('.changetest').style.color = 'black'
}

document.querySelector('#change').ondblclick = () => {
  document.querySelector('p').style.color = 'blue'
  document.querySelector('p').style.backgroundcolor = 'yellow'
  document.querySelector('#change').style.color = 'green'
  document.querySelector('.changetest').style.color = 'red'
}

document.querySelector('#change').onmouseover = () => {
  document.querySelector('p').style.color = 'green'
  document.querySelector('p').style.backgroundcolor = 'yellow'
  document.querySelector('#change').style.color = 'red'
  document.querySelector('.changetest').style.color = 'blue'
}
