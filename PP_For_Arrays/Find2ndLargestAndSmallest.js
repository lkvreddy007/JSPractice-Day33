function secondSmallestAndLargest(arr){
    var a = arr;
    if(arr.length>=2){
        var largest = Math.max(...arr);
        var index = arr.indexOf(largest);
        arr.splice(index,1);
        var secondLargest = Math.max(...arr);
        
        var smallest = Math.min(...a);
        index = a.indexOf(smallest);
        a.splice(index,1);
        var secondSmallest = Math.min(...a);
        console.log("Second Smallest and Largest are "+secondSmallest+" ,"+secondLargest);
    }
    else{
        console.log("Array size should be greater than 2 or equals to 2");
    }
}

{
    var arr = [];
    let i = 0;
    for(i = 0; i<10 ;i++){
        arr[i] = Math.floor(Math.random()*(999-100))+100;
    }
    console.log("Array is: "+arr);
    secondSmallestAndLargest(arr);
}