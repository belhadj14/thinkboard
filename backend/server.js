import express from 'express'
import notesRouter from './routes/notesRoutess/notesRouter.js'
import {ConnectToDB} from './config/db.js'
import dotenv from 'dotenv'
dotenv.config()

console.log(process.env.MONGODB_URI)
console.log(process.env.PORT)



const app=express()
ConnectToDB()

app.use(express.json())

app.use('/api/notes',notesRouter)

app.listen(5001,()=>{console.log("server is running on port 5001")})