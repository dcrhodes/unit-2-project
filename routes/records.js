import { Router } from 'express'
import * as recordsCtrl from '../controllers/records.js'

const router = Router()

export {
    router
}

// GET localhost:3000/records/new
router.get('/new', recordsCtrl.new)

// GET localhost:3000/records
router.get('/', isLoggedIn, recordsCtrl.index)

// GET localhost:3000/records/show
router.get('/:id', recordsCtrl.show)

// POST localhost:3000/records
router.post('/', recordsCtrl.create)

// POST localhost:3000/records/search
router.post('/search', recordsCtrl.search)

router.post('/artistClickSearch', recordsCtrl.artistClickSearch)
router.post('/labelClickSearch', recordsCtrl.labelClickSearch)
router.post('/yearClickSearch', recordsCtrl.yearClickSearch)

// DELETE localhost:3000/records/:id
router.delete('/:id', recordsCtrl.delete)

// GET localhost:3000/records/:id/edit
router.get('/:id/edit', recordsCtrl.edit)

// POST localhost:3000/movies/:id/reviews
router.post('/:id/reviews', recordsCtrl.createReview)

// PUT localhost:3000/movies/:id
router.put('/:id', recordsCtrl.update)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }