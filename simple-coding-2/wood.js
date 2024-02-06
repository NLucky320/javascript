// chair--->3cft
// table--->10cft
// bed---->50cft


function woodQuantityCalculator(chairNumber, tableNumber, bedNumber) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairNumber * perChairWood;
    const tableTotalWood = tableNumber * perTableWood;
    const bedTotalWood = bedNumber * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}
const wood = woodQuantityCalculator(1, 0, 2);
console.log(`wood needed`, wood)


// shirt price--->500
// pant price--->300
// shoe price--->900

function priceCalculator(shirtNumber, pantNumber, shoeNumber) {
    
    const perShirtPrice = 500;
    const perPantPrice = 300;
    const perShoePrice = 900;
    
    const shirtTotalPrice = shirtNumber * perShirtPrice;
    const pantTotalPrice = pantNumber * perPantPrice;
    const shoeTotalPrice = shoeNumber * perShoePrice;

    const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

    return totalPrice
}
const total = priceCalculator(2, 1, 1)
console.log(total)