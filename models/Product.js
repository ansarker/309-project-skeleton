var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title required'
  },

  description: {
    type: String,
    default: '',
    trim: true,
    required: 'A short description required'
  },

  price: {
    type: Number,
    trim: true,
    required: 'Price required'
  },
  
  quantity: {
    type: Number,
    trim: true,
    required: 'Quantity required'
  },
  
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Product = mongoose.model('Product', ProductSchema, 'products');
module.exports = Product;
