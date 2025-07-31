const lodash = require('lodash') 
//Lodash, özellikle diziler (arrays), nesneler (objects), fonksiyonlar (functions) ve string’ler ile çalışırken çok sayıda yardımcı fonksiyon sunar.

const names = ['murat', 'burak', 'begüm', 'kadir']

const capitalize = lodash.map(names, lodash.capitalize)

console.log(capitalize);
