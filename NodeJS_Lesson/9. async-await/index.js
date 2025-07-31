

// async-await yazma olarak senkrona benzer ama asenkron çalışır.

function delayFn(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}

console.log("Şahin")

async function delayGreet(name) {
    await delayFn(2000)
    console.log(name)
}

delayGreet("Murat")


//_________________________________________________


async function division(num1, num2) {
    try {
        if (num2 === 0) throw new Error('Can not divide by 0')
        return num1 / num2
    } catch (error) {
        console.log('error', error)
        return null
    }
}

async function mainFn() {
    console.log(await division(10, 2))
    console.log(await division(10, 0))

}

mainFn()






