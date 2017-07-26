
//Define packages
const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data.js');
const app = express();

// console.log(data);

//Define templates
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

//Set how app will serve static files
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('home', data);
})

app.get('/:user', function(req, res) {
      let user = req.params.user;
      for (i = 0; i < data.users.length; i++) {
        if (data.users[i].username === user) {
          res.render('user', data.users[i])
        }
      }
    });

app.listen(3000, function(){
  console.log('Successfully started the application!');
})
