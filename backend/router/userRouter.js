const Model = require("../model/userModel")
const router = require("express").Router()

router.post("/add", (req, res) => {
  console.log(req.body)

  new Model(req.body)
    .save()
    .then((result) => {
      console.log(result)
      console.log("data saved")
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.json(err)
    })
})

router.get("/getall", (req, res) => {
  Model.find({})
    .then((result) => {
      console.log(result)
      res.json(result)
    
    })
    .catch((err) => {
      console.error(err)
      res.json(err)
    })
  // res.send('response achieved ')
})

router.post("/checkemail", (req, res) => {
  const formdata=req.body;
  console.log(formdata);
  Model.findOne({email:formdata.email}).then((result) => {
      console.log(result);
      if(result){
          res.status(200).json(result);
      }else{
          res.status(400).json({message:"Invalid Email"})
      }
  }).catch((err) => {
      res.status(500).json(err);
  });
}  )

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.json(err)
    })
})

router.delete("/delete/:userid", (req, res) => {
  Model.findByIdAndDelete(req.params.userid)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.json(err)
    })
})

router.put("/update/:userid", (req, res) => {
  Model.findByIdAndUpdate(req.params.userid, req.body, { new: true })
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err)
      res.json(err)
    })
})

router.post('/authenticate', (req, res) => {
    const formdata = req.body;
    Model.findOne({email: formdata.email, password: formdata.password})
    .then((result) => {
        console.log(result);
        if(result) {
            console.log('login success');
            res.json(result);
        }
        else {
            console.log('login failed');
            res.status(400).json({message: 'login failed'});
        }
        
})
})

module.exports = router;