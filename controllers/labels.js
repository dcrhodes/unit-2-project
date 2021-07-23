import { Label } from '../models/label.js'

export {
    newLabel as new,
}

function newLabel(req, res) {
    res.render('labels/new')
}