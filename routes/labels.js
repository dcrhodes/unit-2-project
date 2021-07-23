import { Router } from 'express'
import * as labelsCtrl from '../controllers/labels.js'

const router = Router()

export {
    router
}

// GET localhost:3000/labels/new
router.get('/new', labelsCtrl.new)