import {username,password} from '../../dataLogin'

const validationEmail = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const validationPassword = /\d/
const validationPassword2 = /^.{6,10}$/


 
 function validation({username,password}) {
const errors = {};

if(!validationEmail.test(username)){
    errors.username = 'Debe ser un formato de Email valido.'
}

if(!validationPassword.test(password)){
    errors.password = 'Debe contener almenos un numero.'
}

if(!validationPassword2.test(password)){
    errors.password = 'Debe tener una longitud entre 6 y 10 caracters'
}



return errors

}

export const isLoginTrue = (userName,passWord) => {
    let errors = {}

    if(userName !== username) errors.username = 'Nombre de usuario incorrecto.'
    
    if(passWord !== password)  errors.password = 'La contraseña ingresa es incorrecta.'
    
    if(errors.username || errors.password ){
        return errors
    } else return "isTrue"
     
}
export default validation
