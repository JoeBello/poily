var router = require('express').Router();
var User = require('./user.model');

router.route('/')
  .post(function(req, res) {
    var user = new User();
    user.name = req.body.name;

    user.save(function(err) {
      if (err) {
        console.log(err);
        res.send(err);
      }

      res.json({ message: 'User created!'});
    });
  })
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err) {
        console.log(err);
        res.send(err);
      }

      res.json(users);
    });
  });
  // .put
  // .delete

  router.route('/:user_id')
  .get(function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if (err) {
        console.log(err);
        res.send(err);
      }

      res.json(user);
    });
  })
  .put(function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if (err) {
        console.log(err);
        res.send(err);
      }
      user.name = req.body.name;

      user.save(function(err) {
        if (err) {
          console.log(err);
          res.send(err);
        }

        res.json({ message: 'User updated!' });
      });
    });
  })
  .delete(function(req, res) {
    User.remove({
      _id: req.params.user_id
    }, function(err, user) {
      if (err) {
        console.log(err);
        res.send(err);
      }
      res.json({ message: 'User deleted!'});
    })
  })

  module.exports = router;
