function PicnicBudget(persons) {

    if (typeof persons !== 'number' || persons < 0) {
    return `persons should be a positive number`
}
    const costOf100Person = 0;
    const costOf101To200Person = 0;
    const costOfAbove200Person = 0;
    let totalCost = 0;

    if (persons <= 100) {
        firstCost = persons * 5000;
        return firstCost;
    }
    
    else if (persons <= 200) {
        first100Cost = 5000 * 100;
        remainingCost = (persons - 100) * 4000;
        total = first100Cost + remainingCost;
        return total;
    }
    else {
        first100Cost = 5000 * 100;
        second100Cost = 4000 * 100;
        remainingCost = (persons - 200) * 3000;
        total = first100Cost + second100Cost+ remainingCost;
        return total;
    }

}

console.log(PicnicBudget(201))                                                        