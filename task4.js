const items = [
    { category: 'фрукты', value: 10 },
    { category: 'овощи', value: 15 },
    { category: 'фрукты', value: 20 },
    { category: 'напитки', value: 25 },
    { category: 'овощи', value: 5 }
];

function sumByCategory(categ) {
    const result = {};
    
    for (const item of categ) {
        const { category, value } = item;
        
        if (result[category]) {
            result[category] += value;
        } else {
            result[category] = value;
        }
    }
    return result;
}

console.log('Суммы по категориям:', sumByCategory(items));