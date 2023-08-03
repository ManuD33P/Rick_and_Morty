const axios = require('axios');


//funcion manejadora de las solicitudes.

function httpRequest(url) {
  
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });

}

//envia una respuesta a la solicitud.

function sendOK(res,data){
    res.status(200).json(data)
}

//envia una respuesta con el error

function sendError(res,error){
     if(error.response)
      res.status(error.response.status).json(error.response.data.error);
     else 
     res.status(404).json(error.message);
}

module.exports={
 httpRequest,
 sendOK,
 sendError
}