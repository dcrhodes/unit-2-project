import { Router } from 'express'
import * as artistsCtrl from '../controllers/artists.js'

const router = Router()

export {
    router
}

// GET localhost:3000/artists/new
router.get('/new', artistsCtrl.new)