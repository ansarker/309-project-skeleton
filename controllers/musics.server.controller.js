var mongoose = require('mongoose');
var Music = require('./../models/Music.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.createView = function(req, res){
  res.render('./../public/views/music/new.ejs', {
          user: req.user || null,
          request: req
        });
};

module.exports.singleView = function(req, res){
  res.render('./../public/views/music/view.ejs', {
          user: req.user || null,
          request: req
        });
}

module.exports.listView = function(req, res) {
    Music.find(function(err, data) {
      if (err) {
        return res.status(400).send({

          message: errorHandler.getErrorMessage(err)
        });
      }
      else {
        console.log("api called");

        res.render('./../public/views/music/all.ejs', {
          user: req.user || null,
          request: req,
          musics: data
        });
      }
    });
  
	
};



module.exports.list = function(req, res) {
  Music.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var music = new Music(req.body);
  music.user = req.user;
  music.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};


module.exports.read = function(req, res) {
  res.json(req.Music);
};


exports.delete = function(req, res) {
	var music = req.music;
	music.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(music);
		}
	});
};


module.exports.update = function(req, res) {
  var music = req.music;

  	music = _.extend(music, req.body);

  	music.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(music);
  		}
  	});
};

exports.musicByID = function(req, res, next, id) {
	Music.findById(id).populate('user', 'email').exec(function(err, music) {
		if (err) return next(err);
		if (!music) return next(new Error('Failed to load music ' + id));
		req.music = music;
		next();
	});
};