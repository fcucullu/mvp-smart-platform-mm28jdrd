import { Router } from 'express'
import usersRoutes from './users.js'
import itemsRoutes from './items.js'
import analyticsRoutes from './analytics.js'

const router = Router()

router.use('/users', usersRoutes)
router.use('/items', itemsRoutes)
router.use('/analytics', analyticsRoutes)

export default router
