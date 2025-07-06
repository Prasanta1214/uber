const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./connect')
const app = express()
app.use(cors())
app.use(express.json()) 

app.get('/', (req, res) => {
    User.find()
        .then(users=> res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})      

app.post('/create',(req,res)=>{
    const {name, email, age} = req.body;
    const newUser = new User({
        name,
        email,
        age
    })
    newUser.save()
        .then(() => res.json('User created successfully!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

app.put('/update/:id',(req,res)=>{
    const id = req.params.id
    const {name, email, age} = req.body;
    User.findByIdAndUpdate({_id:id},{ name, email, age})
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err))

})
app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id
    User.findByIdAndDelete({_id:id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})
app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`)
})