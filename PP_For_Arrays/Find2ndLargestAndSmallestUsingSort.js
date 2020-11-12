function secondSmallestAndLargest(arr){
    arr.sort();
    var secondLargest = arr[arr.length - 2];
    var secondSmallest = arr[1];
    console.log("Second Smallest and Largest are "+secondSmallest+" ,"+secondLargest)
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