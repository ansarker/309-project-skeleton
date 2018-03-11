module.exports = function(app){

 var articles = require('./../controllers/articles.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/articles')
	.get(articles.list)
	.post(users.requiresLogin, articles.create);

  app.route('/api/articles/:articleId')
	.get(articles.read)
  .delete(users.requiresLogin, articles.delete);

	app.route('/api/articles/edit/:articleId')
	.get(articles.read)
	.put(users.requiresLogin, articles.update);

app.route('/articles/all').get(articles.listView);	// class done by miss
app.route('/articles/table').get(articles.lists);	// home done by me
app.route('/articles/form').get(articles.form);
app.route('/articles/employee').get(articles.employeeList);
app.param('articleId', articles.articleByID);


}
