var db = require("./db.js");

module.exports.job_positions = function (req, res) {
    res.json("HELLO WORD!");
};

module.exports.job_positions_add = function (req, res) {

  name = "test name";
  description = "test description";
  category = "test category";

  //TODO // text formatting
  db.pool.query('INSERT INTO job_positions(name, description, category) ' + 
    "values('" + name + "','" + description + "','" + category + "')"
    ).then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Se agrego el trabajo'
        });
    })
    .catch(function (err) {
      return next(err);
    });

}