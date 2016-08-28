var db = require("./db.js");

module.exports.job_positions = function (req, res) {
    res.json("HELLO WORD!");
};

module.exports.job_positions_add = function (req, res) {

  name = "test name";
  description = "test description";
  category = "test category";

  db.pool.query('INSERT INTO job_positions(name, description, category) ' + 
    "values('" + name + "','" + description + "','" + category + "')"
    ).then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });

  /*req.body.age = parseInt(req.body.age);
  db.none('insert into pups(name, breed, age, sex)' +
      'values(${name}, ${breed}, ${age}, ${sex})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });
    
    res.json("HELLO WORD! + {req.params.tagId}");*/
};
