const counter = () => {
  let count = 0

  const timer = setInterval(() => {
    count += 1
    console.log(count)

    if (count > 7) clearInterval(timer)
  }, 1000);

  console.log(timer)
}

counter()