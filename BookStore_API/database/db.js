const mongoose = require('mongoose')

const connectToDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017")
        console.log('mongodb is connected successfully')
    } catch (e) {
        console.log('database/db.js: Mongodb connection failed ', e)
        process.exit(1) // uygulamayı sonlandırmak için kullanılır 1 hatalı bir şekilde sonlandırıldı, 0 hatasız bir şekilde sonlandırıldı anlamına gelir.
    }
}

module.exports = connectToDb