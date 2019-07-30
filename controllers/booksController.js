const db = require("../models");
const axios = require("axios");
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
// const APIKEY = "AIzaSyB6bQbILSH2fiFIw9alVhxs5EXiBAHkbeI"

module.exports = {
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("hit controller");
    console.log(req.body);
    db.Book.create(req.body).then(dbModel => {
      console.log(dbModel);
      res.json(dbModel)
    }).catch(err => res.status(422).json(err))
  }, 
  remove: function(req, res) {
    db.Book.findById({_id: req.params.id})
    .then(dbModel => dbModel.remove())
    .then(result => {
      res.json(result)
    }).catch(err => res.status(422).json(err))
  },
  search: function(req, res) {
    console.log("hit");
    axios.get(BASEURL + req.params.search)
    .then(response => {
      console.log(response);
      res.json(response.data.items)})
  }
}