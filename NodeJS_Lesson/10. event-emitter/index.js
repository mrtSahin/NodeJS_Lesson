

// EventEmitter, olay tabanlı programlama modelini destekleyen bir yapıdır.
// Yani bir **olay (event)** oluştuğunda, daha önce tanımlanmış **dinleyiciler (listener)** çalıştırılır.

const EventEmitter = require('events')

const myFirstEmitter = new EventEmitter
// ✔️ EventEmitter sınıfından bir örnek (instance) oluşturduk.
// Artık bu myFirstEmitter objesi ile:
//  olay tanımlayabiliriz (on)
//  olay tetikleyebiliriz (emit)


myFirstEmitter.on('greet', (name)=>{
    console.log(`Hello ${name}`)
})
// 'greet' (yani selamla) adlı bir olay (event) tanımlıyoruz.
// ✔️ Bu olay tetiklendiğinde (emit edildiğinde), yanındaki callback çalışacak.
// ✔️ Callback bir name parametresi alıyor ve konsola "Hello Murat Şahin" gibi bir şey yazacak.

// 🧠 Not: on('eventAdı', callback)
// Olayı dinler, olay tetiklenirse bu fonksiyon çalışır.

myFirstEmitter.emit('greet', 'Murat Şahin')
// ✔️ 'greet' olayını tetikliyoruz.
// ✔️ Bu olayı yukarıda dinlemiştik, dolayısıyla callback çalışır.
// ✔️ 'Murat Şahin' parametresi olarak geçiyor, o da konsola yazılıyor:





