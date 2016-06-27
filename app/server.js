var express = require('express') //llamamos a Express
var app = express()

// para establecer las distintas rutas, necesitamos instanciar el express router
var router = express.Router()


var port = process.env.PORT || 8080 // establecemos nuestro puerto

/*router.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo!' })
})*/

/*router.get('/cervezas', function(req, res) {
  res.json({ mensaje: '¡A beber cerveza!' })
})*/

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

router.post('/', function(req, res) {
  res.json({ mensaje: '¡Hola ' + req.body.nombre + ' con parametro!' })
})

/*router.post('/', function(req, res) {
  res.json({ mensaje: 'Método post' })
})

router.delete('/', function(req, res) {
  res.json({ mensaje: 'Método delete' })
})*/

// iniciamos nuestro servidor
app.use('/api', router)
app.listen(port)
console.log('API escuchando en el puerto ' + port)
