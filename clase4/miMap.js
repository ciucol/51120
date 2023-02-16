const array = [3, 5, 7, 9]

const callback = (num) => {
  return num * 2
}

const miMap = function (cb) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(cb(this[i]))
  }
  return newArray
}

Array.prototype.miMap = miMap

const array2 = [3, 5, 7, 9]

const newArray2 = array2.miMap(num => {
  return num * 2
})
console.log(newArray2)