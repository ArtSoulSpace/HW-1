/*Генерация пароля*/ 

function passwordGeneration() {
    let charset ="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$";
    let length = 8;
    let result = '';

    for(let i = 0, n = charset.length; i < length; ++i){
        result += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(result)
}

passwordGeneration()