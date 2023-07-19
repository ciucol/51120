const repartidor = {
  name: 'Mate'
}


const asincrono = () => {
  setTimeout(() => {
    console.log('continua asíncrono')
  }, 120000);
}

console.log('inicia')
asincrono()
console.log('finaliza')