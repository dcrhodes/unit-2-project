import { Record } from '../models/record.js'

export {
	newRecord as new,
	create,
	index,
	show,
	createReview,
	deleteRecord as delete,
	edit,
	update,
}

function newRecord(req, res) {
	res.render('records/new')
}

function create(req, res) {
	Record.create(req.body)
	.then(record => {
		res.redirect('/records/new')
	})
	.catch(error => {
		console.log(error)
		res.redirect('/records/new')
	})
}

function index(req, res) {
	Record.find({}, function(err, records) {
	  res.render('records/index', {
		records: records,
		title: 'All Records'
	  })
	})
  }














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








