const menu = require('../Models/menuSchema')

const addMenu = async (req, res) => {
    try {
        const { name, description, menuItems } = req.body
        const newMenu = new menu({
            name, description, menuItems
        })
        const savedMenu = await newMenu.save()
        res.status(200).send('data saved succesfully')
    }
    catch (error) {
        console.log(error)
        res.status(500).send('internal error occured')
    }
}

const getMenu = async (req, res) => {
    try {
        const menuData = await menu.find()
        res.status(200).send(menuData)
    }
    catch (error) {
        res.status(500).send('internal error occured')
    }
}
module.exports = { addMenu, getMenu }