import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

export {
    router
}



// GET localhost:3000/profiles
router.get('/', profilesCtrl.index)

// GET localhost:3000/profiles/:id
router.get('/:id', profilesCtrl.show)

router.get('/:id/edit', profilesCtrl.edit)
router.put('/:id', profilesCtrl.update)