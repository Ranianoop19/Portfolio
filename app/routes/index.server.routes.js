const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>
{
    res.render('index',{title:"Home"})
})
router.get('/about',(req,res,next)=>{
    res.render('about',{title:'About'})
})
router.get('/public/images')
router.get('/public/css/styles')
router.get('/public/js/scripts')
router.get('/contact',(req,res,next)=>{
    res.render('contact',{title:'Contact Me'})
})
router.get('/service',(req,res,next)=>{
    res.render('service',{title:'sERVICE'})
})
router.get('/project',(req,res,next)=>{
    res.render('project',{title:'Project'})
})
module.exports=router;