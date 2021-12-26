import app from './app.js'
import history from 'connect-history-api-fallback'
app.use(history());

var port = process.env.PORT || 5000
app.listen(port)
console.log('server started '+ port)

