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
		res.redirect('/records')
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
	Record.find({}, (error, results) => {
	console.log(results)
	})
	res.redirect('/')
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


function show(req, res) {
}








