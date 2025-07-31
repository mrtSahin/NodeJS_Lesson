const express = require('express')
const app = express()

// root route
app.get('/', (req, res) => {
    res.send('Welcome to our home page')
})

// get all products
app.get('/products', (req, res) => {
    const products = [
        {
            id: 1,
            label: 'Product 1',
        },
        {
            id: 2,
            label: 'Product 2',
        },
        {
            id: 3,
            label: 'Product 3',
        },
    ]

    res.send(products)
})

app.get('/product/:id', (req, res) => {
    const productId = req.params.id
    const products = [
        {
            id: 1,
            label: 'Product 1',
        },
        {
            id: 2,
            label: 'Product 2',
        },
        {
            id: 3,
            label: 'Product 3',
        },
    ]
    const getSingleProduct = products.find(product => product.id == productId)
    console.log(getSingleProduct)
    if (getSingleProduct) {
        res.json(getSingleProduct)
    } else {
        res.status(404).send('Prodcut is not found! Please try with different number')
    }

})


const port = 3000

app.listen(port, () => {
    console.log(`Server is now running at port ${port}`)
})






