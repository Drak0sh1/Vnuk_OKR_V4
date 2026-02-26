function getCities(countriesObject) {
    return Object.values(countriesObject).flat().join(', ');
}

const countries = {
    Россия: ['Москва', 'Санкт-Петербург', 'Казань'],
    США: ['Нью-Йорк', 'Лос-Анджелес', 'Чикаго'],
    Франция: ['Париж', 'Лион', 'Марсель']
};

console.log('Все города:', getCities(countries));