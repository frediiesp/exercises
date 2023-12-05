const numbers = [1, 2, 3, 4, 5]
const squares = []

numbers.forEach((num, index, what) => {
  what[index] = num * num
})

console.log(numbers)