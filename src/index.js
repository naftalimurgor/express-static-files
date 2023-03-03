const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000

async function main(params) {
  const app = express()
  
  app.get('/', (req, res) => {
    res.sendFile(`${path.join(__dirname, '../files')}/index.css`)
  })

  app.listen(PORT, () => console.log('server running at PORT:', PORT))
}

main().catch((err) => process.exit(1))
