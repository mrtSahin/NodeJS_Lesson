// module.exports -> export
// module.exports, bir dosyada (modülde) dışarıya aktarmak (export etmek) istediğin değişkenleri, fonksiyonları, sınıfları veya nesneleri tanımlar.


// require -> import
// require, başka bir dosyada tanımlanmış bir modülü içe aktarmak (import etmek) için kullanılır.

const firstModule = require('./first-module') // burada oluşturduğumuz modulü import ediyoruz.

console.log("Add method result: ",firstModule.add(23,56)) // burada import ettiğimiz modül içerisindeki metodları kullanıyoruz/

try {
    console.log('trying to divide by zero')
    let result = firstModule.divide(0,10)// module içerisinde kontrol edilip hata yollandığı için bu kısımda catch bloğuna geçer bu bloktan devam etmez
    console.log("Divide method result: ",result);
    
} catch (error) {
    console.log('Caught an error:', error.message);
}

