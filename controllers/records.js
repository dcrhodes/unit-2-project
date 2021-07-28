import { Record } from '../models/record.js'
import { Profile } from '../models/profile.js'
import { User } from '../models/user.js'

import axios from 'axios'


export {
	newRecord as new,
	create,
	index,
	show,
	createReview,
	deleteRecord as delete,
	edit,
	update,
	search,
	artistClickSearch,
	labelClickSearch,
	yearClickSearch,
	addToCollection,
}

function newRecord(req, res) {
	res.render('records/new')
}

function create(req, res) {
	Record.create(req.body)
	.then(record => {
		res.redirect('/records')
	})
	.catch(error => {
		console.log(error)
		res.redirect('/error')
	})
}

function index(req, res) {
    Record.find({})
    .then(records => {
      res.render('records/index', {
        title: "VNL Records",
        records,
      })
    })
  }


function artistClickSearch(req, res){
	console.log(req.body)
	Record.find({ artist: req.body.artist })
	.then(results => {
		console.log(results)
		res.render('records/search', {
			record: results
		})
	})
	.catch(error => {
		console.log(error)
		res.redirect('/error')
	})
  }

  function labelClickSearch(req, res){
	console.log(req.body)
	Record.find({ label: req.body.label })
	.then(results => {
		console.log(results)
		res.render('records/search', {
			record: results
		})
	})
	.catch(error => {
		console.log(error)
		res.redirect('/error')
	})
  }

  function yearClickSearch(req, res){
	console.log(req.body)
	Record.find({ originalYear: req.body.originalYear })
	.then(results => {
		console.log(results)
		res.render('records/search', {
			record: results
		})
	})
	.catch(error => {
		console.log(error)
		res.redirect('/error')
	})
  }

  
function search(req, res){
	if (req.body.searchParam === "artist") {
		Record.find({ artist: req.body.searchContent })
		.then(results => {
			console.log(results)
			res.render('records/search', {
			record: results
		})
	})
	.catch(error => {
		console.log(error)
		res.redirect('/error')
	})
} else if (req.body.searchParam === "title") {
	Record.find({ title: req.body.searchContent })
	.then(results => {
		console.log(results)
		res.render('records/search', {
		record: results
	})
})
.catch(error => {
	console.log(error)
	res.redirect('/error')
})
} else if (req.body.searchParam === "label") {
	Record.find({ label: req.body.searchContent })
	.then(results => {
		console.log(results)
		res.render('records/search', {
		record: results
	})
})
.catch(error => {
	console.log(error)
	res.redirect('/error')
})
}
}





  function deleteRecord(req, res) {
	Record.findByIdAndDelete(req.params.id, function(error, record) {
	res.redirect('/records')
	})
  	.catch(error => {
	console.log(error)
	res.redirect('/error')
	})
}



function show(req, res) {
    Record.findById(req.params.id)
    .then(record => {
      res.render('records/show', {
        title: `${record.artist} - ${record.title}`,
        record,
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/error')
    })
  }

function edit(req, res) {
	Record.findById(req.params.id, function(error, record) {
	  res.render('records/edit', {
		record,
		error, 
		title: 'Edit Record'
	  })
	})
  }

function update(req, res) {
Record.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(error, record) {
	res.redirect(`/records/${record._id}`)
})
}

function createReview(req, res) {
	Record.findById(req.params.id, function(error, record) {
	  record.reviews.push(req.body)
	  record.save(function(error) {
		res.redirect(`/records/${record._id}`)
	  })
	})
  }

function addToCollection(req, res) {
	Profile.findById(req.user.profile._id)
	.then(profile => {
	  profile.shelf.push(req.params.id)
	  profile.save()
	  .then(()=> {
		res.redirect(`/records/${req.params.id}`)
	  })
	})
  }