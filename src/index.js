import express from 'express'
import morgan from 'morgan'
import clienteController from './cliente/clienteController.js'

const app = express()
const port = 3000

app.use(express.json())

app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}))

app.use('/cliente', clienteController)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})