{
    var arr = [];
    for(let i = 10;i<100;i++){
        if(parseInt(i/10) == i%10){
            arr.push(i);
        }
    }
    console.log("Numbers with repeated digits are: "+arr);
}