
import express from 'express'
const router = express.Router()
import { getAllUsers } from '../controllers/Project.js'


router.get('/all', getAllUsers)

export { router as UserRoutes }
