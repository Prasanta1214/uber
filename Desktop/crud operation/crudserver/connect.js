
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/curdoperation')

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    action: String
})

const User = mongoose.model('User', UserSchema);
module.exports = User;