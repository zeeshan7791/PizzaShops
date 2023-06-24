const router= require('express').Router()
const pizzaController=require('../controller/pizza')
router.post("/businesses/search",pizzaController.createPizza)

module.exports=router
