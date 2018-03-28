module.exports = function(app) {
    var musics = require('./../controllers/musics.server.controller.js');
    var users = require('./../controllers/users.server.controller.js');
    
    app.route('/api/musics')
       .get(musics.list)
       .post(users.requiresLogin, musics.create);
    
    app.route('/api/musics/:musicId')
    .get(musics.read)
    .delete(users.requiresLogin, musics.delete);
    
    app.route('/api/musics/edit/:musicId')
    .get(musics.read)
    .put(users.requiresLogin, musics.update);
    
    app.route('/musics/all').get(musics.listView);
    app.route('/musics/new').get(musics.createView);
    app.route('/music/:musicId').get(musics.singleView);
    
    app.param('musicId', musics.musicByID);
}