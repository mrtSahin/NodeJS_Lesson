const book = require("../models/book")
const Book = require("../models/book")


const getAllBooks = async (req, res) => {
    try {
        const allBooks = await book.find()
        console.log('All books: ', allBooks)
        if (allBooks?.length > 0) {
            res.status(200).json({
                success: true,
                message: 'List of books fetched successfully',
                data: allBooks
            })
        } else {
            res.status(404).json({
                success: false,
                message: 'No books found in collection'
            })
        }

    } catch (e) {
        console.log('/contoller/book-controller: ', e)
        res.status(500).json({
            success: false,
            message: 'Something went wrong! Please try again.'
        })
    }
}


const getSingleBookById = async (req, res) => {
    try {
        const getCurrentBookId = req.params.id
        const bookDetailsById = await Book.findById(getCurrentBookId)

        if (!bookDetailsById) {
            return res.status(404).json({
                success: false,
                message: ' Book with the current ID is not found! Please try with a different ID'
            })
        }
        res.status(200).json({
            success: true,
            data: bookDetailsById
        })
    } catch (e) {
        console.log('/contoller/book-controller: ', e)
        res.status(500).json({
            success: false,
            message: 'Something went wrong! Please try again.'
        })
    }
}


const addNewBook = async (req, res) => {
    try {
        const newBookFromData = req.body
        console.log(newBookFromData)
        const newlyCreatedBook = await Book.create(newBookFromData)
        console.log('Created new book: ', newlyCreatedBook)
        if (newBookFromData) {
            res.status(201).json({
                success: true,
                message: 'Book added successfully',
                year: 2024,
                data: newlyCreatedBook
            })
        }
    } catch (e) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong! Please try again.'
        })
        console.log("/controller/book-controler ", e)
    }
}


const updateBook = async (req, res) => {
    try {
        const getCurrentBookId = req.params.id
        const updatedBookFromData = req.body
        const updatedBook = await Book.findByIdAndUpdate(
            getCurrentBookId,
            updatedBookFromData,
            { new: true }
        )

        if (!updatedBook) {
            return res.status(404).json({
                success: false,
                message: 'Book with the current ID is not found! Please try with a different ID'
            })
        }
        res.status(200).json({
            success: true,
            message: `Book updated successfully. ID: ${getCurrentBookId}`,
            data: updatedBook
        })

    } catch (e) {
        console.log('/contoller/book-controller: ', e)
        res.status(500).json({
            success: false,
            message: 'Something went wrong! Please try again.'
        })
    }
}


const deleteBook = async (req, res) => {
    try {
        const getCurrentBookId = req.params.id
        const deletedBook = await Book.findByIdAndDelete(getCurrentBookId)

        if (!deletedBook) {
            return res.status(404).json({
                success: false,
                message: 'Book with the current ID is not found! Please try with a different ID'
            })
        }
        res.status(200).json({
            success: true,
            message: `Book deleted successfully. ID: ${getCurrentBookId}`,
            data: deletedBook
        })

    } catch (e) {
        console.log('/contoller/book-controller: ', e)
        res.status(500).json({
            success: false,
            message: 'Something went wrong! Please try again.'
        })
    }
}


module.exports = {
    getAllBooks,
    getSingleBookById,
    addNewBook,
    updateBook,
    deleteBook
}