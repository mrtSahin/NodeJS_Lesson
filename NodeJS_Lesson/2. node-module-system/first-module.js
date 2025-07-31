function add(a,b){
    return a+b
}

function substract(a,b){
    return a-b
}

function divide(a,b){
    if(b == 0){
        throw new Error('Divide by zero is not allowed')
    }
    return a/b
}

module.exports = { // burada oluşturduğumuz metodları diğer dosyalarda kullanabilmek için dışarıdan erişebilir yapıyoruız
    // yani dışarı aktarıyoruz diyebiliriz.
    add, substract, divide
}