const userData = require('../data')
const {v4:uuidv4} = require('uuid');

const {sendOK, sendError} = require('../utils/httpRequest')
/* userData = [{
  email
  password
  myFavorite
}]

*/



function userValidation(res,email,password,id=null){
   
    let isTrue = userData.find((user)=>
        user.email === email && user.password === password
    );
    if(isTrue){
        const user_id = uuidv4();
        isTrue.id = user_id;
        sendOK(res,{id:isTrue.id})
    } else{ 
        sendError(res,{message:'invalid username or password'});
    }
    
}

const isLogin = (res,id) => {
    const user_seccionId = userData.find((user)=> user.id === id);
    if(user_seccionId){
        const {myFavorite} = user_seccionId;
        sendOK(res,{status:true,myFavorite});
    } 
    else sendOK(res,{status:false});
}

module.exports = {
    userValidation,
    isLogin
}