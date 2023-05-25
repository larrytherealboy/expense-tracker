const express = require('express') 
const exphbs = require('express-handlebars') 
const methodOverride = require('method-override') 
const session = require('express-session')
const flash = require('connect-flash')
const app = express()
const PORT = process.env.PORT || 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


app.get('/', (req, res) => {
  res.send('hello world')
})
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})