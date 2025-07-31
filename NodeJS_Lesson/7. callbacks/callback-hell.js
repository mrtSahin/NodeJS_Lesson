

const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("Error read file ", err)
        return
    }
    console.log('File content read: ', data)

    const modifyFileData = data.toUpperCase()

    fs.writeFile('output.txt', modifyFileData, (err) => {
        if (err) {
            console.log("Error wiriting file ", err)
            return
        }
        console.log('Data written to the new file')
        fs.readFile('output.txt', 'utf8', (err, data) => {
            if (err) {
                console.log("Error read file ", err)
                return
            }
            console.log('File content read: ', data)
        })
    })
})