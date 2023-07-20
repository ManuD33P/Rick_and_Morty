import {username,password} from '../../dataLogin'

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

export const isLoginTrue = (userName,passWord) => {
    let errors = {}

    if(userName !== username) errors.username = 'Incorrect username.'
    
    if(passWord !== password)  errors.password = 'The entered password is incorrect.'
    
    if(errors.username || errors.password ){
        return errors
    } else return "isTrue"
     
}
export default validation
