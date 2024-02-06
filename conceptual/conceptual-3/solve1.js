// convert ana to vori

function AnaToVori(Ana) {
    if (typeof Ana !== 'number' || Ana < 0) {
    return `Please provide a valid number`
}

    const Vori = Ana * 0.0625;
    return Vori;
}
console.log(AnaToVori(16))
console.log(AnaToVori(-16))
console.log(AnaToVori('ty'))