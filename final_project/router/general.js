const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  return res.status(200).send(JSON.stringify(books));
  //return res.status(300).json({message: "Yet to be implemented"});
});
function getByISBN(isbn){
  return books[isbn];
}
function getbyauthor(auth){
  var result = Object.keys(books).map((key) => [key, books[key]]);
  for (let index = 0; index < result.length; index++) {
    if(result[index][1].author==auth){
      return result[index][0];
    }
    
  }
  return "-1";
}
// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  let book=getByISBN(parseInt(req.params.isbn));
  if(book){
    return res.status(200).json({message: JSON.stringify(book)});

  }
  else{
    return res.status(400).json({message: "Book Not Found"});
  }
  //return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  let isbn=parseInt(getbyauthor(req.params.author));
  let book=getByISBN(isbn);
  if(book)
    {
      return res.status(200).json({message: book});
    }
    else{

      return res.status(404).json({message: "Book  not exist"});
    }
  //return res.status(200).send(book);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
