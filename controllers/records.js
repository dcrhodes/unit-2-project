import { Record } from '../models/record.js'
import { Profile } from '../models/profile.js'

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
	zearch,
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


function search(req, res){
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



function zearch(req, res) {
	console.log(req.body)
	Record.find({ artist: req.body.artist })
	.then(artistResults => {
	  Record.find({ title: req.body.title })
	  .then(titleResults => {
		Record.find({ label: req.body.label })
		.then(labelResults => {
		  Record.find({ genre: req.body.genre })
		  .then(genreResults => {
			console.log(artistResults)
			console.log(titleResults)
			console.log(labelResults)
			console.log(genreResults)

			res.render('records/search', {
				record: artistResults,
				record: titleResults,
				record: labelResults,
				record: genreResults,
		  	})
		  })
		})
	  })
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

// function search(req, res) {
// 	Record.find({req.query.search})
// 	.then(response => {
// 		res.render('records/new', {
// 			title: 'Search Results',
// 			results: response.data.results
// 		})
// 	})
// 	.catch(err => {
// 	console.log(err)
// 	res.redirect('/')
// 	})
// }














function update(req, res) {

}

function edit(req, res) {
}

function deleteRecord(req, res) {
}


function createReview(req, res) {
}











