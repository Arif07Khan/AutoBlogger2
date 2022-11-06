// signup form    
const {Schema, model} = require('../connection');

const myschema = new Schema({
    name:String,
    username:String,
    email:String,
    password:String,
    isAdmin:Boolean,
    createdAt:Date,
    avatar:String
});

module.exports = model('users',myschema);