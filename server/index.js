/** @format */

const express = require('express')
const cors = require('cors')
const convertToDocxRouter = require('./convertToDocx')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use('/api', convertToDocxRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
