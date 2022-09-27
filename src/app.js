import  express  from 'express'
import cors from 'cors'
import {UserRoutes} from './routes/Project.js'
const app = express() 

// MIDDLEWARE
app.use(cors())
app.use(express.json()) //req.body

app.use('/all', UserRoutes)


app.listen(3000, () => {
    console.log(`The server listen on port 3000`)
})