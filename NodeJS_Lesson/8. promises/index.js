
//Promise, JavaScript’te bir işlemin (örneğin bir dosya okuma, veri çekme, vs.) 
// gelecekte tamamlanıp tamamlanmadığını temsil eden bir söz gibidir.

//🔹 Neden Promise Kullanılır?
// Node.js’te birçok işlem (dosya okuma/yazma, veri çekme, vs.) asenkron çalışır. 
// Eğer bunları düzgün bir şekilde sıraya sokmazsak, kodumuz karışık bir "callback hell"e döner. Promise, bu karmaşayı azaltır ve okunabilirliği artırır.

function delayFn(time) { // doğru sonuç verirse resolve döner. hata verirse reject döner
    return new Promise((resolve) => setTimeout(resolve, time))
}

console.log('Promise lecture starts')
delayFn(2000).then(() => console.log('After 2 seconds promise resolved')) // diğer bloklardan bağımsız olarak 2 saniye gecikmeli olarak dönüt verir.
console.log('End')


function divideFn(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject('Can not perform division by 0')
        } else {
            resolve(num1 / num2)
        }
    })
}


divideFn(10, 5)
    .then((result) => console.log(result, "res")) // resolve döndüğünde burası çalışır
    .catch((error) => console.log(error, "err")) // reject döndüğünde burası çalışır


















