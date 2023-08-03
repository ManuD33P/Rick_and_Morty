import axios  from 'axios'
const validationEmail = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const validationPassword = /\d/
const validationPassword2 = /^.{6,10}$/


 
 function validation({username,password}) {
const errors = {};

if(!validationEmail.test(username)){
    errors.username = 'It must be a valid email format.'
}

if(!validationPassword.test(password)){
    errors.password = 'Must contain at least one number.'
}

if(!validationPassword2.test(password)){
    errors.password = 'It must be between 6 and 10 characters long.'
}



return errors

}

export const isLoginTrue = async (userName,passWord) => {

    try {
        const {data} = await axios(`http://localhost:3001/rickandmorty/login?email=${userName}&password=${passWord}`)
//         // Almacena la información en sessionStorage
// sessionStorage.setItem("key", "value");

// // Obtiene la información almacenada desde sessionStorage
// var data = sessionStorage.getItem("key");
        
        if(data.id){
         sessionStorage.setItem("login", data.id)
         return true
        } 
    } catch (error) {
        if(error.response) alert(error.response.data)
        else alert(error.message)
        return false 
    }
    
     
}
export default validation
