import { appConfig } from '../config/app.config.js'

async function getLogger() {
  let response
  switch (appConfig.environment) {
    case 'development':
      console.log('dev')
      response = await import('./dev.logger.js')
      break

    case 'production':
      console.log('prod')
      response = await import('./prod.logger.js')
      break
  }

  return response
}

export default getLogger
