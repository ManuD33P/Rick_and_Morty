const { sendOK, sendError } = require("../utils/httpRequest");
const userData = require("../data");

function getMyFavorite(res, id) {
  const user = userData.find((user) => {
    return user.id === id;
  });

  try {
    if(user?.myFavorite.length){
      const {myFavorite} = user
        sendOK(res,myFavorite);
    } else 
     sendError(res,{message:'My favorite is empty'})
  } catch (error) {
    sendError(res, error)
  }
}

function addFavorite(res,{id,character}){
  const user = userData.find(user => user.id === id);
  
  if(user){
     user.myFavorite.push(character);
     sendOK(res,user.myFavorite)
  } else
     sendError(res,{message:'user id not found'});
}

function deleteCharacter(res,{id,characterId}){
    const user = userData.find(user => user.id === id);

    if(user){

        const newMyFavorite = user.myFavorite.filter(character =>{
             return   character.id !== characterId
        } 
        );
        user.myFavorite = [...newMyFavorite];
        sendOK(res,user.myFavorite);
    } else 
    sendError(res,{message:'user id not found'});
}


module.exports = {
    getMyFavorite,
    addFavorite,
    deleteCharacter
}