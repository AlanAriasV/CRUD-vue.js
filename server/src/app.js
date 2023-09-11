import express from 'express'
import config from './config'

import galleryRoutes from '../routes/gallery.routes'

const app = express()



// Register view engine
// Por ahora lo voy a dejar con ejs, pero supongo que luego igual se cambia a vue
app.set('port',config.port)
app.set('view engine','ejs')
app.use(express.json())
app.use(galleryRoutes)
// Middleware

//añadir app.use(express.static('images'))

export default app