import { Router } from 'express'
import * as recordsCtrl from '../controllers/records.js'

const router = Router()

export {
    router
}

// GET localhost:3000/records/new
router.get('/new', recordsCtrl.new)

// GET localhost:3000/records
router.get('/', recordsCtrl.index)

// POST localhost:3000/records
router.post('/', recordsCtrl.create)

// POST localhost:3000/records/search
router.post('/search', recordsCtrl.search)










// GET localhost:3000/movies/:id
router.get('/:id', recordsCtrl.show)

// GET localhost:3000/movies/:id/edit
router.get('/:id/edit', recordsCtrl.edit)



// POST localhost:3000/movies/:id/reviews
router.post('/:id/reviews', recordsCtrl.createReview)

// DELETE localhost:3000/movies/:id
router.delete('/:id', recordsCtrl.delete)

// PUT localhost:3000/movies/:id
router.put('/:id', recordsCtrl.update)