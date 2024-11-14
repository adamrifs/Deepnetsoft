const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    menuItems: [
        {
            itemName: { type: String, required: true },
            itemDescription: { type: String, required: true },
            price: { type: Number, required: true }
        }
    ]
})

const menu = mongoose.model('menu', menuSchema)

module.exports = menu