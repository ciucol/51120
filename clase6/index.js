const obj = {}

for (let i = 0; i < 10000; i++) {
  const number = Math.floor(Math.random() * 20 + 1)
  if (!obj[number]) {
    obj[number] = 1
  } else {
    obj[number]++
  }
}

random = 5 - 12 - 20 - 12 - 12

console.log(obj)


