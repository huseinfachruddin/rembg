const app = require('./app.js')
const history = require('connect-history-api-fallback')
app.use(history());

var port = process.env.PORT || 5000
app.listen(port)
console.log('server started '+ port)

