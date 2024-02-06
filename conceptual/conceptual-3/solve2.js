

function PandaCost(singara, samucha, jilapi) {
    const singaraPrice = 7;
    const samuchaPrice = 10;
    const jilapiPrice = 15;
    if (!singara || !samucha || !jilapi) {
        return 'provide amount please'
    }
    else if(typeof singara !== 'number'|| typeof samucha !== 'number' || typeof jilapi !== 'number'){
        return `value should be a number`
    }
    else if (typeof singara < 0 || samucha < 0 || jilapi < 0) {
         return `value should be a positive number`
    }
       
    

    const total = singaraPrice * singara + samuchaPrice * samucha + jilapiPrice * jilapi;
    return total;
}
console.log(PandaCost(1,2,1));
console.log(PandaCost(1,1));
console.log(PandaCost(1,1,'hh'));
console.log(PandaCost(1,1, -9));