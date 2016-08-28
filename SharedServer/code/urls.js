views = require("./views.js");

module.exports.set_urls = function (router) {
	// API
	router.get('/api/job_positions', views.job_positions);
	router.post('/job_positions/categories/:PositionCategory', views.job_positions_add);

	// Front-end
};
