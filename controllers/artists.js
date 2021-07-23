import { Artist } from '../models/artist.js'

export {
    newArtist as new,
}

function newArtist(req, res) {
    res.render('artists/new')
}