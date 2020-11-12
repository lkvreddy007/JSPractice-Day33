{
    const prompt = require('prompt-sync')({sigint: true});
    var number = Number(prompt('Enter the number '));
    var arr = []
    while(number%2==0){
        number = number/2;
        arr.push(2);
    }
    for(var i =3; i*i<number; i++){
        while(number%i==0){
            arr.push(i);
            number = number/i;
        }
    }
    if(number>2){
        arr.push(number);
    }
    console.log("Prime Factors of "+number+" are: "+arr)
}