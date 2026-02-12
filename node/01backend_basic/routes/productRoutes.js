const express =require('express');
const router=express.Router();

let productData = []

router.post('/product-post',(req,res)=>{
    try{
        const {prod_name, prod_price, prod_qty} =  req.body;
        productData.push({prod_name, prod_price, prod_qty})
        res.status(201).json({data:productData,msg:"data created"})

    }catch(err){
        res.status(500).json({error:err,msg:"internal "})

    }

})

router.get('/product-get', (req, res) => {
  res.json({
    total: productData.length,
    data: productData
  });
});



module.exports= router