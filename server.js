var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-Parser');


var myName = "Jacob Robertson"
var hobbies = ["Soccer", "Computer Games", "Board Games", "Hanging with the Wife"];
var occupations = ["Electrician", "Lighting Designer", "Programmer"]
var mylocation = {
  city: "Bountiful",
  state: "Utah"
}
var sites = ["https://www.facebook.com/jacob.w.robertson.7", "http://www.google.com"]
var references = ["Taylor Millward", 'Kirby Wood', "Kinley Neilson"]

var skills = [{
    id: 1,
    name: myName,
    experience: "Beginner"
  }, {
    id: 2,
    name: "Ninja Skills"
    experience: "Professional"
  }, {
    id: 3,
    name: "Programmer",
    experience: "Noob"
  }

  app.use(bodyParser.json());

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next();
  })

  app.get('/name', function(req, res) {
    res.send({
      name: 'Jacob Robertson'
    })
  });

  /*   app.route('/location')
     .get(function(req, res) {
       res.send(mylocation)
     })
     .put(function(req, res) {
       mylocation = req.body;
       res.send(mylocation)
     })*/

  app.get('/location', function(req, res) {
    res.send(mylocation)
  })

  app.put('/location', function(req, res) {
    mylocation = req.body
    res.send(mylocation)
  })


  app.get("/hobbies", function(req, res) {
    if (req.query.order === "ascending")
      res.send({
        hobbies: hobbies.sort()
      })
    else if (req.query.order === "descending") {
      res.send({
        hobbies: hobbies.sort().reverse()
      })
    } else {
      res.send({
        hobbies: hobbies
      })
    }
  })

  app.get('/occupations', function(req, res) {
    if (req.query.order === "ascending")
      res.send({
        occupations: occupations.sort()
      })
    else if (req.query.order === "descending") {
      res.send({
        occupations: ocupations.sort().reverse()
      })
    } else {
      res.send({
        occupations: occupations
      })
    }
  })

  app.get('/occupations/latest', function(req, res) {
    res.send({
      latestoccupation: occupations[occupations.length - 1]
    });
  });

  app.route('/mentions')
  .get(function(req, res) {
    res.send({
      site: sites
    });
  })
  .post(function(req, res) {
    sites.push(req.body.site);
    res.send({
      site: sites
    });
  });

  app.route('/friends')
  .get(function(req, res) {
    res.send({
        reference: references
      })
      .post(function(req, res) {
        references.push(req.body.reference)
        res.send({
          reference: references
        })
      })
  })

  app.get('/skills', function(req, res)) {

    res.send({})
  })
}




app.listen(9000)
