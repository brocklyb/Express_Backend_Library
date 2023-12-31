var express = require('express');
var router = express.Router();

const message = [{
  text: 'Hello',
  user: 'pepe',
  added: new Date()
},{
  text: 'HHHIIIIIIIII',
  user: "meme King",
  added: new Date()
}]

// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});


router.get('/new', function(req, res, next){
  res.render('form')
})

router.post('/new', function(req,res){
  //res.send(message[0])
  //let auth = req.body.author
  //let mess = req.body.messages
  console.log('PRE = ', message)
  message.push({text:req.body.author, user:req.body.messages, added: new Date()})
  console.log('POST=',message)
  res.redirect('/')
})


module.exports = router;
