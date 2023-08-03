const {httpRequest,sendOK,sendError} = require("../utils/httpRequest")
//https://rickandmortyapi.com/api/character/?page=${page}
//https://rickandmortyapi.com/api/character/${charId}

 async function getCharacterById(res,charId){
    try{ 
        const {name,gender,status,image,origin,id,species} = await httpRequest(`https://rickandmortyapi.com/api/character/${charId}`);
        sendOK(res,{name,gender,status,image,origin:origin.name,species,id});

    } catch(error){
        sendError(res,error)
    }
      
 }

 async function getCharactersPage(res,pages){
    try{
        let characters = [];
        const data = await httpRequest(`https://rickandmortyapi.com/api/character/?page=${pages}`);
         data.results.forEach((char) =>{
            characters.push({
                id:char.id,
                name:char.name,
                gender:char.gender,
                status:char.status,
                image:char.image,
                origin:char.origin.name,
                species:char.species
            })
        })        
        sendOK(res,characters);
    } catch(error){
        sendError(res,error);
    }
 }



module.exports={
getCharacterById,
getCharactersPage
}