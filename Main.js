const asyncFn = async () => {
  throw new Error('There was an error!')
}

asyncFn()
  .then(value => console.log(value))
  .catch(error => console.log(error.message))