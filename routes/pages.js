const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

// router 
router.get('/',authController.isLoggedIn,(req, res)=>{
    res.render('index',{
        user: req.user
    });
})
router.get("/login",(req,res)=>{
    res.render('login');
});
router.get('/signup',(req,res)=>{
    
    res.render('signup');
});
router.get('/profile', authController.isLoggedIn, (req,res)=>{
    if(req.user){
        res.render('profile',{
            user: req.user
        });
    } else{
        res.redirect('/login')
    }
})



module.exports = router;


