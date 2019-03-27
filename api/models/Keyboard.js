const mongoose = require('mongoose')
const slugify = require('slugify')

const schema = new mongoose.Schema({
  name: String,
  slug: String,
  text: String,
  photos: [String],
  manufacturer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manufacturer',
  },
  size: String,
  price: String,
  // specs
  switches: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Switch',
  }],
  cable: String,
  firmware: String,
  interface: String,
  dimensions: String,
  weight: String,
  // features
  programmable: String,
  bluetooth: Boolean,
  hotswappable: Boolean,
  simultaneousInput: Boolean,
  // layout
  keysLayout: String,
  layout: String,
  spacebarSize: String,
  // design
  usbPassthrough: Boolean,
  // manufacturing
  caseMaterial: String,
  plateMaterial: String,
  // purchase
  availability: String,
}, {
  timestamps: true,
})

schema.pre('save', function () {
  this.slug = slugify(this.name, {
    lower: true,
  })
})

module.exports = mongoose.model('Keyboard', schema)
