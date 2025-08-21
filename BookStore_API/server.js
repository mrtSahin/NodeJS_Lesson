const express = require("express")
require("dotenv").config() // .env dosyasını kolaylıkla okuyabilmemiz için 
const connectToDB = require("./database/db")
const bookRoutes = require("./routes/book-routes")


const app = express()
const PORT = process.env.PORT || 3000


// connect to our
connectToDB()

// middleware -> express.json()
app.use(express.json())

// routes here
app.use("/api/books", bookRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
















