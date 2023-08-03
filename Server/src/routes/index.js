// const express = require('express')
// const Routes = express.Router();

const Routes = require('express').Router();
const {getCharacterById,getCharactersPage} = require('../controllers/characterController');
const {userValidation,isLogin} = require('../controllers/userController');
const {getMyFavorite,addFavorite,deleteCharacter} = require('../controllers/myFavorite');

//https://rickandmortyapi.com/api/character/?page=1"
//hhtp://rickandmorty/character/1

// Route get obtener character, otro por paginas, my favorite, post my favorite, validacion de usuario.

Routes.get('/character/:id', (req,res)=>{ // rick
    const {id} = req.params 
    getCharacterById(res,id);
})

Routes.get('/character/page/:page', (req,res)=>{
    const {page} = req.params;
    getCharactersPage(res,page);
})

Routes.get('/character/myfavorite/:id', (req,res)=>{
  const {id} = req.params
  getMyFavorite(res,id);
});


Routes.post('/character/myfavorite/add',(req,res)=>{
const data = req.body
addFavorite(res,data)
})

Routes.delete('/character/myfavorite/delete',(req,res)=>{
 const data = req.body
 deleteCharacter(res,data)
})



Routes.get('/login',(req,res)=>{
    const {email,password}= req.query
    userValidation(res,email,password);
})

Routes.get('/islogin',(req,res)=>{
   const {id} = req.query
   isLogin(res,id)
})
  
module.exports = {
    Routes
}