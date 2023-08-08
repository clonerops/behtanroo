import express from 'express'
import bodyParser from 'body-parser'
import api from './routes'

export const runServer = () => {
    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    app.use('/api', api)

    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is up: ${process.env.PORT}`)
    })
}



