let map = new Map();
let i = 0;
while(i<50){
    let birthMonth = Math.floor(Math.random()*100)%12+1;
    let contains = map.has(birthMonth);
    let val = 0
    if(contains){
        val = map.get(birthMonth);
    }
    map.set(birthMonth,++val);
    i++;
}
console.log(map);