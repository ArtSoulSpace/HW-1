const arr = [10, 12, 15, 22, 33, 37, 45, 50];

for(let elem of arr){
    let num = String(elem);
    if(num[0] == 1 || num[0] == 5){
        console.log(num);
    }
}
