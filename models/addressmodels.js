const mongoose=require('mongoose')
const { models } = require('mongoose')

const addressTemplet=new mongoose.Schema({
    address :{
        type:String,
        require:true
    },
    phoneno :{
        type:String,
        require:true
    },
    email :{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('addressTable',addressTemplet)