// Date 객체
// let now = new Date()
// document.write('<br', now.toLocaleString())  // document.write('<br', now.toDateString())
// document.write('<br', now.getTime())
// // document.write(
// //   '<br>',
// //   now.getFullYear(),
// //   '-',
// //   now.getMonth() + 1,
// //   '-',
// //   now.getDate(),
// //   '/',
// //   now.getHours(),
// //   ':',
// //   now.getMinutes(),
// //   ':',
// //   now.getSeconds(),
// //   ':',
// //   now.getMilliseconds()
// // )
// let nextYear = new Date(now.setFullYear(now.getFullYear() + 1))
// document.write('<br', nextYear.toLocaleString())
// document.write('<br', nextYear.getTime())

// let numbers = new Array()
// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(numbers)
// document.write('<br>', numbers)

// let chars = ['a', 'b', 'c', 'd']
// document.write('<br>', chars)
// document.write('<br>')

// for (let i = 0; i < numbers.length; i++) {
//   document.write(numbers(i), '-')
// }
// document.write('<br>')

// let newArray = numbers.concat(chars, numbers, chars)
// document.write('<br> concat(): ', newArray)
// let newString = numbers.join('||')
// document.write('<br join(): ', newString)
// numbers.push(100, 200, 300)
// document.write('<br> push(): ', numbers)
// numbers.unshift(-300, -200, -100)
// document.write('<br> unshift(): ', numbers)
// let result = numbers.pop()
// document.write('<br> pop(): ', numbers)
// document.write('<br> result(): ', result)
// result = numbers.shift()
// document.write('<br> shift(): ', numbers)
// document.write('<br> result(): ', result)

// // let spliceNumbers = numbers.splice(3, 2, '12', '13', '14', '15')
// // document.write('<br> splice(): ', numbers)
// // document.write('<br> result(): ', spliceNumbers)

// let sliceNumbers = numbers.slice(2)
// document.write('<br> slice(): ', numbers)
// document.write('<br> result(): ', sliceNumbers)

// document.write('<br>', Math.abs(-103.22))
// document.write('<br>', Math.sin(Math.PI / 6))
// document.write('<br>', Math.exp(3))
// document.write('<br> floor ', Math.floor(3.456789))
// document.write('<br> round ', Math.round(3.3789))
// document.write('<br> ceil ', Math.ceil(3.123))
// document.write('<br> max ', Math.max(4, 1, 56, 7, 3))
// let randomNumber = Math.random()
// document.write('<br> random() ', randomNumber)
// document.write('<br> random() ', Math.round(randomNumber * 100))

// // window. <- 빼도 됨
// console.log(document.body.children)
// alert('hello')
// console.log(navigator.language)
// console.log(navigator.cookieEnabled)
// console.log(history.length)
// history.back()

// // Object 객체
// const person = {
//   firstName: 'John',
//   lastName: 'Lenon',
//   hobbies: ['music', 'movie']
//   address: [
//     street: '2000 main street',
//     city: 'New York',
//     state: 'W',
//     country: 'USA'
//   ]
// }

// console.log(person.firstName)
// console.log(person.hobbies)
// console.log(person.hobbies.movie)
// console.log(person.address)
// console.log(person.address.city)

// const todos = [
//   [
//     id: 1,
//     text: '과제물 제출',
//     idCompleted: true
//   ],
//   [
//     id: 2,
//     text: '점심 식사',
//     idC level: false
//   ],
//   [
//     id: 3,
//     text: '프로젝트 파일',
//     idC level: true
//   ],
//   [
//     id: 4,
//     text: '과제물 제출',
//     idC level: true
//   ]
// ]

// console.log(todos)

// for (let i=0; i<todos.length; i++) {
//   console.log[todos(i).is + ':' + todos(i).texxt + '-' + todos(i).idCompleted]
// }

// for (let a of todos) {
//   console.log[a.id + ':' + a.text + '-' + a.idCompleted]
// }

// todos.forEach(funtion(todo))[
//   console.log[todo.id + ':' + todo.text + '-' + todo.idCompleted]
// ]

// const todo_text = todo.map(function (todo) {
//   return { text: todo.text, done: todo.idCompleted }
// })
// console.log(todo_text)

// const todo_completed = todo.filter(function (todo) {
//   return todo.idCompleted === ture
//   })
//   console.log(todos_completed)

//   const todo_completed = todos
//   .filter(function (todo) {
//     return todo.idCompleted === ture
//   })
//   .map(function (todo) {
//     return todo.text
//   })
//   console.log(todos_completed)

//   // 객채지향프로그래밍
//   // 객체생성함수

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.dob = dob
//   this.getFullName = function () {
//     return '$(this.firstName) - $(this.firstName)'
//   }
//   this.getFullName = function () {
//     return '$(this.lastName) - $(this.firstName($(todo))'
//   }
// }

// const person1 = new Person('소망', '오', 2004)
// const person2 = new Person('미주', '김', 2000)
// console.log(person2.getKoreanFullName())

// class Man {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.dob = dob
//   }
// }
// const man1 = new Man('희수', '강', 1999)
// const man2 = new Man('지수', '최', 1998)
// console.log(man1.getKoreanFullName())
