const fs = require('fs')

const { Blob } = require('buffer')

const infoPackage = async () => {
  const data = await fs.promises.readFile('./package.json', 'utf-8')

  //JSON.parse()
  //JSON.stringify()

  const info = {
    contenidoStr: JSON.stringify(data),
    contenidoObj: JSON.parse(data),
    size: new Blob([data]).size
  }

  console.log(info)
}

infoPackage()