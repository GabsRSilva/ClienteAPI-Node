import express from 'express'
import Cliente from './model/cliente.model.js'

const router = express.Router()
const sleep = timeout => new Promise(resolve => {
    setTimeout(() => {
        resolve()
    }, timeout)
})

router.get('/', async (req, res) => {
    await sleep(1000)
    const clientes = await Cliente.findAll()
    return res.json(clientes)
})

router.post('/', async (req, res) => {
    const cliente = await Cliente.create(req.body)
    return res.json(cliente)
})

router.put('/', async (req, res) => {
    const { id, nome } = req.body
    const cliente = await Cliente.findByPk(id)
    cliente.nome = nome
    await cliente.save()
    const clientes = await Cliente.findAll()
    return res.json(clientes)
})

router.delete('/', async (req, res) => {
    const { id } = req.params
    const cliente = await Cliente.findByPk(id)
    if (cliente){
        await cliente.destroy()
    }
    res.end()
})

export default router