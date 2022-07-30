const express=require('express')
const addressTempletCopy=require("../models/addressmodels")

const router=express.Router();

router.route('/address').get((req,res) => {
    addressTempletCopy.find()
    .then(foundLink=>res.json(foundLink))
})

router.post('/address',async(req,res)=>{

    const gotAddress=new addressTempletCopy({
        address: req.body.address,
        phoneno: req.body.phoneno,
        email: req.body.email,
    });
    gotAddress.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })

});

module.exports=router;

