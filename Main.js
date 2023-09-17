const person = {
  name:'bob',
  age: 25
}

const person2 = {...person}

person2.age = 26

console.log(person2.age)
console.log(person.age)