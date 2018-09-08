/**
 * @file App index
 */

import express from 'express'
import next from 'next'

/* Next process */
const app = next({ dir: './src', dev: true })

const handle = app.getRequestHandler()

/* wrap Express in Next */
app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => app.render(req, res, '/sign-up', req.query))

  server.get('*', (req, res) => handle(req, res))

  server.listen(3000)
  server.on('listening', () =>
    console.log(`> Ready on http://localhost:3000`)
  )
})