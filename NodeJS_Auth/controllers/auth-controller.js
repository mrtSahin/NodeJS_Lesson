const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// register controller
const registerUser = async (req, res) => {
    try {
        // body den kullanıcı bilgilerini alma
        const { username, email, password, role } = req.body

        // kullanıcı daha önceden oluşturulmuş mu kontrol edilir.
        const checkExistingUser = await User.findOne({ $or: [{ username }, { email }] })
        //$or demek: "Aşağıdaki koşullardan en az biri doğru olursa eşleşme kabul edilir."
        //[{ username }, { email }] demek:  Ya username alanı, verilen username değişkenine eşitse, Ya da email alanı, verilen email değişkenine eşitse, kullanıcı bulunur.
        if (checkExistingUser) {
            return res.status(400).json({
                success: false,
                message: 'User is already exist either with same username or same email. Please try with different username or email.'
            }) // aynı mail ya da kullanıcı adına bir kullanıcı daha önceden oluşturulmuşsa uyarı atıyoruz ve kullanıcıyı oluşturmuyoruz.
        }

        //hash user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // create new user and save on your database
        const newlyCreatedUser = await User.create({
            username,
            email,
            password: hashedPassword,
            role: role || 'user'
        })
        if (newlyCreatedUser) {
            console.log('User registered succesfully: ', newlyCreatedUser)
            res.status(201).json({
                success: true,
                message: 'User registered succesfully',
                data: newlyCreatedUser
            })
        } else {
            console.log('Unable to register user! Please try again.')
            res.status(400).json({
                success: false,
                message: 'Unable to register user! Please try again.',
            })
        }


    } catch (e) {
        console.log(e)
        res.status(500).json({
            success: false,
            message: 'Something error occured! Please try again.'
        })
    }
}

// login controller 
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body
        // kullanıcı veritabanında mevcut mu değil mi bakıyoz
        const user = User.findOne({ username })

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials'
            })
        }

        // şifre doğru mu bakıyoz
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials'
            })
        }

        // token oluşturma
        const accessToken = jwt.sign(
            {
                userId: user._id,
                username: user.username,
                role: user.role
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: '15m'
            }
        )



    } catch (e) {
        console.log(e)
        res.status(500).json({
            success: false,
            message: 'Something error occured! Please try again.'
        })
    }
}

module.exports = { registerUser, loginUser }