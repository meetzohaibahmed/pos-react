const express = require('express')
const router = express.Router()

const Product = require('../models/ProductModel')

//#region Routes

// Get all products..
router.get('/', async (req,res) =>{
    const products = await Product.find({})
    try{
        res.status(200).send(products)
    }catch(err){
        res.status(500).send(err)
    }
})


// Save a product ..
router.post('/' , (req,res) =>{
    const product = new Product({
        name: req.body.name,
        costPrice: req.body.costPrice,
        sellPrice: req.body.sellPrice,
        company: req.body.company,
        category: req.body.category
    })

    product.
            save().
            then(data =>{
                res.json(data).status(200)
            }).
            catch(err =>{
                res.json({message: err})
            })
})

//#endregion

module.exports = router