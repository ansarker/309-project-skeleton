var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MusicSchema = {
    
    title: {
      type: String,
      default: '',
      trim: true,
      required: 'Music title required'
    },
    
    artist: {
        type: String,
        default: '',
        trim: true
    },
    
    album: {
        type: String,
        default: '',
        trim: true
    },
    
    duration: {
        type: String,
        default: '',
        trim: true
    },
    
    genre: {
        type: String,
        default: '',
        trim: true
    }
}

var Music = mongoose.model('Music', MusicSchema, 'musics');
module.exports = Music;