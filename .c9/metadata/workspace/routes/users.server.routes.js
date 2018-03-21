{"filter":false,"title":"users.server.routes.js","tooltip":"/routes/users.server.routes.js","ace":{"folds":[],"scrolltop":232.5,"scrollleft":0,"selection":{"start":{"row":28,"column":24},"end":{"row":28,"column":24},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":3,"state":"doc-start","mode":"ace/mode/javascript"}},"hash":"5b0bf46f7e7308bd48a5d29d867d7acf057a1121","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":33,"column":0},"action":"remove","lines":["'use strict';","","/**"," * Module dependencies."," */","var passport = require('passport');","","module.exports = function(app) {","\t// User Routes","\tvar users = require('./../controllers/users.server.controller');","","\t// Setting up the users profile api","\tapp.route('/users/me').get(users.me);","\tapp.route('/users/:userId').get(users.read);","\tapp.route('/users/:userId').put(users.update);","\tapp.route('/users/accounts').delete(users.removeOAuthProvider);","","\t// Setting up the users password api","\tapp.route('/users/password').post(users.changePassword);","\tapp.route('/auth/forgot').post(users.forgot);","\tapp.route('/auth/reset/:token').get(users.validateResetToken);","\tapp.route('/auth/reset/:token').post(users.reset);","","\t// Setting up the users authentication api","\tapp.route('/auth/signup').post(users.signup);","\tapp.route('/auth/signin').post(users.signin);","\tapp.route('/auth/signout').get(users.signout);","","\t// Routes to user views","\tapp.route('/signin').get(users.signinView);","\t// Finish by binding the user middleware","\tapp.param('userId', users.userByID);","};",""],"id":2},{"start":{"row":0,"column":0},"end":{"row":32,"column":2},"action":"insert","lines":["'use strict';","","/**"," * Module dependencies."," */","var passport = require('passport');","","module.exports = function(app) {","\t// User Routes","\tvar users = require('./../controllers/users.server.controller');","","\t// Setting up the users profile api","\tapp.route('/users/me').get(users.me);","\tapp.route('/users/:userId').get(users.read);","\tapp.route('/users/:userId').put(users.update);","\tapp.route('/users/accounts').delete(users.removeOAuthProvider);","","\t// Setting up the users password api","\tapp.route('/users/password').post(users.changePassword);","\tapp.route('/auth/forgot').post(users.forgot);","\tapp.route('/auth/reset/:token').get(users.validateResetToken);","\tapp.route('/auth/reset/:token').post(users.reset);","","\t// Setting up the users authentication api","\tapp.route('/auth/signup').post(users.signup);","\tapp.route('/auth/signin').post(users.signin);","\tapp.route('/auth/signout').get(users.signout);","","\t// Routes to user views","\tapp.route('/signin').get(users.signinView);","\t// Finish by binding the user middleware","\tapp.param('userId', users.userByID);","};"]}]]},"timestamp":1521001543246}