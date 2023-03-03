const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000

async function main(params) {

  // visiting http://server.tld:port/static/image.jpg serves the file image
  // https://expressjs.com/en/starter/static-files.html
  const app = express()
  app.use('/static', express.static(path.join(__dirname, '../files')))
  console.log(path.join(__dirname, '../files'))
  app.listen(PORT, () => console.log('server running at PORT:', PORT))
}

main().catch((err) => process.exit(1))
