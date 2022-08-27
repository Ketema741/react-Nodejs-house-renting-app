const express  = require('express')

const connectDB = require('./config/db')
const cors = require('cors')



const app = express()
app.use(cors())


// connect Database
connectDB();


// Init Middleware
app.use(express.json({extended:false}))

app.get('/', (req, res) => {res.json({'msg':'hello'})})

const PORT = process.env.PORT || 6000

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/authRealtor', require('./routes/realtorAuth'))
app.use('/api/authUser', require('./routes/userAuth'))
app.use('/api/houses', require('./routes/houses'))
app.use('/api/realtors', require('./routes/realtors'))

app.listen(PORT, ()=>{console.log(`server started at port: ${PORT}`)})