// add mangoose
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
	{
		name:
		{
			type: String,
			required: 'Name is required',
			trim: true
		},
		imported: {
			type: Boolean,
			default: false
		},
		quantity: Number,

		price: Number
	})
// make this public
module.exports = mongoose.model('Product',productSchema)
