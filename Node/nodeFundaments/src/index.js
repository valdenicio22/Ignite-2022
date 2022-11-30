const express = require('express')
const { v4: uuidV4 } = require('uuid')

const app = express()
app.use(express.json())


const data = [{ id: uuidV4(), name: 'Jose', age: 20, cpf: '111', statement: [], total: 0 }]

//Middleware

const verifyExistsAccount = (request, response, next) => {
  const { cpf } = request.headers
  const account = data.find((acc) => acc.cpf === cpf)
  if (!account) return response.status(400).json({ error: 'Account not found!' })
  // request.body.middleware = 'This atribute was added by a middleware'
  request.account = account

  return next()
}

app.get('/allAccount', (request, response) => {
  return response.status(200).json(data)
})

app.post('/account', (req, res) => {
  const { cpf } = req.body
  if (!cpf) return res.status(400).json({ error: 'CPF is a required field' })
  if (data.find((client) => client.cpf.includes(cpf))) {
    return res.status(400).json({ error: "Customer already exists!" })
  }
  data.push({ id: uuidV4(), ...req.body })
  return res.status(201).json('Your account was successfully created')
})

app.get('/statement/:cpf', verifyExistsAccount, (req, res) => {
  const { account } = req

  return res.status(200).json(account.statement)
})

app.patch('/deposit', verifyExistsAccount, (req, res) => {
  const { description, amount } = req.body
  const { account } = req

  const depositOperation = {
    description,
    amount,
    type: 'credit',
    createdAt: new Date(),
    id: uuidV4()
  }


  account.statement.push(depositOperation)
  account.total += depositOperation.amount
  return res.status(200).json('Deposit successfully!')
})

app.patch('/withdraw', verifyExistsAccount, (req, res) => {
  const { account } = req
  const { description, amount } = req.body

  if (account.total - amount < 0) return res.status(400).json('insufficient credit')

  const withdrawOperation = {
    description,
    amount,
    type: 'withdraw',
    createAt: new Date(),
    id: uuidV4()
  }
  account.statement.push(withdrawOperation)
  account.total -= amount

  return res.status(200).json('Withdraw successfully')

})

app.put('/update/:cpf', (req, res) => {
  const { cpf } = req.params
  const { body } = req

  const cliIndex = data.findIndex((cli) => cli.cpf === cpf)
  if (!cliIndex) return res.status(400).json({ error: 'CPF not found' })
  data[cliIndex] = { ...body, cpf }

  return res.status(200).json('Client data was successfully updated')
})

app.get('/account', (req, res) => {
  const { cpf } = req.headers
  const account = data.find((acc) => acc.cpf === cpf)
  return account
    ? res.status(200).json(account)
    : res.status(400).json({ error: 'CPF not found!' })
})

app.delete('/delete', verifyExistsAccount, (req, res) => {
  const { account } = req
  const accIndex = data.findIndex((acc) => acc.cpf === account.cpf)
  if (accIndex) {
    data.splice(accIndex, 1)
    return res.status(200).json('Account was successfully deleted')
  }
})

app.listen(3333)