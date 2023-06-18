// Your solution goes here 
function isStrongPassword(password) {
    if(password.length >=8 &&
        password.search("password")== -1 &&
        /[A-Z]/.test(password) == true){
            return true;
        }
    return false;
}