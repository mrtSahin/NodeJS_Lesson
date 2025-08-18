const express = require("express")
const app = express()



// Middleware
app.use(express.json()) // “Gelen HTTP isteklerinin gövdesi (body) JSON formatındaysa, onu otomatik olarak JavaScript objesine çevir ve req.body içine koy.”
// express.json() middleware’i olmasa, req.body bu veriyi otomatik çözmez, sen elle parse etmek zorunda kalırsın (JSON.parse gibi).

let books = [
    {
        id: '1',
        title: 'Book 1'
    },
    {
        id: '2',
        title: 'Book 2'
    }
]

//intro route
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to our bookstore api"
    })
})

//get all boobs
app.get('/get', (req, res) => {
    res.json(books)
})
app.get('/get/:id', (req, res) => {
    const bookId = req.params.id
    const book = books.find(item => item.id === bookId)
    if (book) {
        res.status(200).json(book)
    } else {
        res.status(404).json({
            message: "Book not found! Please try with a different Book ID",
        })
    }
    res.json(books)
})

app.post('/add', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: `Book ${books.length + 1}`
    }
    books.push(newBook)
    res.status(200).json({
        data: newBook,
        message: "New book is added successfully",
    })
})

app.put("/update/:id", (req, res) => {
    const findCurrentBook = books.find(bookItem => bookItem.id = req.params.id)
    if (findCurrentBook) {
        findCurrentBook.title = req.body.title || findCurrentBook.title // ya request’ten gelen yeni title varsa onu ata, yoksa mevcut olanı koru

        res.status(200).json({
            message: `Book with ID ${req.params.id} updated successfully.`,
            data: findCurrentBook
        })
    } else {
        res.status(404).json({
            message: 'Book not found.'
        })
    }
})



const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`)
})














