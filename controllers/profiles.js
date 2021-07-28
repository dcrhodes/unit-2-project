import { Profile } from '../models/profile.js'

export {
    index,
    show,
    edit,
    update,
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
    .populate('wishlist')
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

  function edit(req, res) {
    Profile.findById(req.params.id, function(error, profile) {
      res.render('profiles/edit', {
      profile,
      error, 
      title: 'Edit Profile'
    })
  })
  }

function update(req, res) {
  Profile.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(error, profile) {
    res.redirect(`/profiles/${profile._id}`)
  })
}