let array = [1,2,2,3,3,4,4,5,5,5]

function count(arr) {
  return arr.reduce((key, value) => (key[value] = ++key[value] || 1, key), {})
}

console.log(count(array))