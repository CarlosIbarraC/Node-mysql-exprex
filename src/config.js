import {config}from 'dotenv'

config()

console.log(process.env.PORT)
export const PORT=process.env.PORT || 3000
export const DB_PORT=process.env.DB_PORT || 3306
export const DB_USER=process.env.DB_USER || 'digita10_user'
export const DB_HOST=process.env.DB_HOST || '51.222.104.17'
export const DB_DATABASE=process.env.DB_DATABASE || 'digita10_test'
export const DB_PASSWORD=process.env.DB_PASSWORD || 'Rodolfo1972*'