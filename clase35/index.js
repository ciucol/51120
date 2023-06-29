import cluster from 'cluster'
import { cpus } from 'os'
import express from 'express'

const numProcesadores = cpus().length

if (cluster.isPrimary) {
  console.log(`${process.pid} es proceso primario`)
  for (let i = 0; i < numProcesadores; i++) {
    cluster.fork()
  }
} else {
  const app = express()

  app.get('/', (req, res) => {
    res.json({
      message: `${process.pid} es proceso secundario, pero es otro server`,
    })
  })

  app.listen(3000, () => {
    console.log('Server running at port 3000')
  })
}

// nodemon src/index.js  ->  8080  12.32.252.12:8080    -> sandro
// nodemon src/index.js  ->  3000  7.120.43.1:3000      -> facu
// nodemon src/index.js  ->  3000  201.123.12.7:3000    -> fermin - eber

// balanceador de carga  ->  12.54.87.101:3000 -> www.misitio.com -> sandro
// balanceador de carga  ->  12.54.87.101:3000 -> www.misitio.com -> fermin
// balanceador de carga  ->  12.54.87.101:3000 -> www.misitio.com -> eber

// cluster manager ->  3000  12.32.252.12:8080
// nodemon src/index.js  ->
// nodemon src/index.js  ->
// nodemon src/index.js  ->  sandro
// nodemon src/index.js  ->

// cluster manager ->  3000  7.120.43.1:3000
// nodemon src/index.js  ->
// nodemon src/index.js  ->
// nodemon src/index.js  ->
// nodemon src/index.js  ->  facu

// cluster manager ->  3000  201.123.12.7:3000
// nodemon src/index.js  ->
// nodemon src/index.js  ->  fermin
// nodemon src/index.js  ->  eber
// nodemon src/index.js  ->
