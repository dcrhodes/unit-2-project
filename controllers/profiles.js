import { Profile } from '../models/profile.js'

export {
    index,
    show,
}

function index(req, res) {
    Profile.find({})
    .then(profiles => {
      res.render('profiles/index', {
        title: "VNL Members",
        profiles,
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
  }

  function show(req, res) {
    Profile.findById(req.params.id)
    .populate('shelf')
    .then(profile => {
      res.render('profiles/show', {
        title: `${profile.name}'s Collection`,
        profile,
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
  }