const express = require('express')
const router = express.Router();
const User = require('../Models/usersModel')
router.use(express.json());
//create user
router.post("/createuser", (req, res) => {
    console.log(req.body);
    User.create(req.body)
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  });
  // find user 
  router.get("/finduser/:favoriteFood", (req, res) => {
    User.findOne({ favoriteFood: req.params.favoriteFood })
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  });
  // find by id
  router.get("/finduserbyid/:id", (req, res) => {
    User.find({ _id: req.params.id })
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  });
  // push and save 
  router.put("/saveuser/:id", (req, res) => {
    User.findOne({ _id: req.params.id })
    .then((data) =>{
        data.favoriteFood.push('humburger')
        data.save()
        res.send(data)
    })
        
    .catch((err) => res.send(err));
    
  });
  // find and update
  router.put("/updateuser/:name", (req, res) => {
    User.findOneAndUpdate({ name: req.params.name},
      {$set :{age: req.body.age}},{new:true})
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
   
  })
    
  //delete a user
router.delete("/deleteuser/:id", (req, res) => {
    User.findByIdAndRemove(req.params.id)
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  });
  //remove a user
  router.remove("/removeuser/:name", (req, res) => {
    User.remove({name:"Mary"},
    function done(data) {
      res.json(data)
    }
    )
  })
  // chain search 
    router.get('/searchuser/:name', (req, res) => {
    function done(data) {
    const foodToSearch = "burrito";
    Person.find({favoriteFoods:foodToSearch}).sort({ name: 1 }).limit(2).select('-age').exec((err,data) =>{   
      
      err ? done(err): done(null, data);
      
    })
    
  }
})
module.exports = router