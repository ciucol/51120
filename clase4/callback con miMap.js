const array = [3, 5, 7, 9]

const callback = (num) => {
  return num * 2
}

const miMap = (arr, cb) => {
  const newArray = []
  for (let i = 0; i < arr.length; i++) {
    newArray.push(cb(arr[i]))
  }
  return newArray
}

const newArray = miMap(array, callback)

console.log(newArray)