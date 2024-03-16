const express = require('express')
const customerRouter = require('./routes/customerRoutes')
const cartRouter = require('./routes/cartRoutes')
const productRouter = require('./routes/productRoutes')
const vendorRouter = require('./routes/vendorRoutes')

require('./db/mongoose')

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(customerRouter)
app.use(vendorRouter)
app.use(productRouter)
app.use(cartRouter)




app.listen(port, () => {
    console.log('server listening on port ' + port)
})