{   
    let b = true;
    let maxKey = 0;
    let map = new Map();
    while(b){
        let toss = (Math.floor(Math.random()*10)%6)+1;
        if(!map.has(toss)){
            map.set(toss,1)
        }
        else if(map.has(toss)){
            var val = map.get(toss);
            val++;
            map.set(toss,val);
        }
        for(let key of map.keys()){
            if(map.get(key)==10){
                maxKey = key;
                b=false;
            }
        }
    }    
    console.log("The number repeated max times is: "+maxKey);
}