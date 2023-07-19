import winston from 'winston'
import { customLevelOptions } from '../utils/loggerCustomLevelOptions.js'

export const logger = winston.createLogger({
  levels: customLevelOptions.levels,
  transports: [
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.colorize({ colors: customLevelOptions.colors }),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      filename: './logs/warnings.log',
      level: 'warning',
      format: winston.format.simple(),
    }),
  ],
})
