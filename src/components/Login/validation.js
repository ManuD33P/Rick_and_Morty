
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

export default validation