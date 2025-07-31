const EventEmitter = require('events')

class MyCustomemitter extends EventEmitter{
    constructor(){
        super()
        this.greeting = 'Hello'
    }

    greet(name){
        this.emit("greeting", `${this.greeting}, ${name}`)
    }
}

const myCustomEmitter = new MyCustomemitter()

myCustomEmitter.on("greeting",(input)=>{
    console.log(`Greeting event`,input)
})

myCustomEmitter.greet('Murat Şahin')