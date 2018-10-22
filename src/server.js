import express from 'express'
import App from '../dist/ssr/app'
import React from 'react'
import { StaticRouter } from 'react-router'
import reactDOMServer from 'react-dom/server'

const app = express()

app.use(express.static('dist'))
app.use('/images', express.static('images'))

app.get('*',(req, res) => {
  const html = reactDOMServer.renderToString(
    <StaticRouter
      location="/videos"
      context= {{
        name: 'Ziker'
      }}
    >
      <App />
    </StaticRouter>
  )
  res.write(
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>React App</title>
      <link rel="stylesheet" href="/css/app.css">
    </head>
    <body>
      <div id="home-container">${html}</div>
      <div id="modal-container"></div>
      <!-- script src="http://localhost:9000/js/app.js"></script>-->
      <script src="/js/app.js"></script>
    </body>
  </html>`)
  res.end()
})

app.listen(3000)

console.log('Serve funcionando en puerto 3000')
