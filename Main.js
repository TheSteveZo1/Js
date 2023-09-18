const personOne = {
  age : 21,
  name: 'bob'
}

function bobik(person){
  const newbobik = Object.assign({},person)
  newbobik.age +=1
  return newbobik
}
const newbobik2 = bobik(personOne)
console.log(personOne.age)
console.log(newbobik2.age)